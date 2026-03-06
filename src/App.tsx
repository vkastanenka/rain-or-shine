import { Card, FlexCol, FlexRow, Grid, Section, Text } from "@/components";
import {
  normalizeOpenMeteoForecastTimeInterval,
  OPEN_METEO_TIME_INTERVAL_MAP,
  type OpenMeteoForecastResponse,
  groupOpenMeteoHourlyForecastByDate,
  formatOpenMeteoValue,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_MAP,
} from "@/entities";
import {
  CurrentWeatherCard,
  FORECAST_LABELS_MAP,
  CurrentDayCelestialCycleCard,
  CurrentDayHumidityCard,
  CurrentDayPressureCard,
  CurrentDayWindCard,
  PriorDayTemperatureRangeCard,
  DailyTimePeriodWeatherCard,
  DiurnalPeriodWeatherCard,
  HourlyWeatherCard,
} from "@/features";
import forecastResponseJson from "./forecast-response.json";

function App() {
  const forecastResponse = forecastResponseJson as OpenMeteoForecastResponse;

  const hourlyForecastItemsList = normalizeOpenMeteoForecastTimeInterval(
    forecastResponse,
    OPEN_METEO_TIME_INTERVAL_MAP.Hourly,
  );

  const hourlyForecastGroupByDateList = groupOpenMeteoHourlyForecastByDate(
    hourlyForecastItemsList,
  );

  console.log(hourlyForecastGroupByDateList);

  return (
    <Section>
      <FlexCol gap={8} className="w-full">
        {hourlyForecastGroupByDateList.map((dailyListItem, i) => {
          return (
            <FlexCol
              gap={2}
              key={`${dailyListItem.date}-${i}`}
              className="w-full"
            >
              <Text type="body2">
                {formatOpenMeteoValue.dayOfWeekMonthDay(dailyListItem.date)}
              </Text>
              {dailyListItem.list.map((hourlyListItem, i) => {
                const Icon =
                  WMO_CODES_DAY_ICONS_FILL_MAP[
                    hourlyListItem.weather_code ?? 0
                  ];
                const condition =
                  WMO_CODES_MAP[hourlyListItem.weather_code ?? 0];
                return (
                  <Card
                    key={`${hourlyListItem.time}-${i}`}
                    className="p-4 w-full"
                  >
                    <FlexRow justify="between" align="center">
                      <FlexCol>
                        <Text>
                          {formatOpenMeteoValue.hourMarker(hourlyListItem.time)}
                        </Text>
                        <FlexRow gap={2} align="center">
                          <Icon size={60}></Icon>
                          <Text type="headline2">
                            {formatOpenMeteoValue.temperature(
                              hourlyListItem.temperature_2m,
                            )}
                          </Text>
                          <FlexCol gap={0}>
                            <Text>{condition}</Text>
                            <Text type="caption">
                              {formatOpenMeteoValue.apparentTemperature(
                                hourlyListItem.apparent_temperature,
                              )}
                            </Text>
                          </FlexCol>
                        </FlexRow>
                      </FlexCol>
                      <FlexRow gap={16} className="pr-32">
                        <Grid cols={2} className="gap-x-2">
                          <Text>Wind</Text>
                          <Text>20 km/h E</Text>
                          <Text>Wind Gust</Text>
                          <Text>38 km/h</Text>
                          <Text>Humidity</Text>
                          <Text>88%</Text>
                        </Grid>
                        <Grid cols={2} className="gap-x-2">
                          <Text>P.O.P.</Text>
                          <Text>60%</Text>
                          <Text>Rain</Text>
                          <Text>0.4mm</Text>
                        </Grid>
                      </FlexRow>
                    </FlexRow>
                  </Card>
                );
              })}
            </FlexCol>
          );
        })}
      </FlexCol>
    </Section>
  );
}

export default App;

// const CurrentScreen = () => {
//   const forecastResponse = forecastResponseJson as OpenMeteoForecastResponse;

//   const hourlyForecastItemsList = normalizeOpenMeteoForecastTimeInterval(
//     forecastResponse,
//     OPEN_METEO_TIME_INTERVAL_MAP.Hourly,
//   );

//   const dailyForecastItemsList = normalizeOpenMeteoForecastTimeInterval(
//     forecastResponse,
//     OPEN_METEO_TIME_INTERVAL_MAP.Daily,
//   );

//   const dateTimePeriodGroupsList = groupOpenMeteoHourlyForecastByDateTimePeriod(
//     hourlyForecastItemsList,
//   );

//   const dailyTimePeriodForecastList = createOpenMeteoTimePeriodList(
//     dateTimePeriodGroupsList,
//   );

//   const diurnalPeriodGroupsList = groupOpenMeteoHourlyForecastByDiurnalPeriod(
//     hourlyForecastItemsList,
//   );

//   const currentWeatherCardProps = getCurrentWeatherCardProps({
//     ...(forecastResponse.current ? forecastResponse.current : {}),
//     ...dailyForecastItemsList[0],
//   });

//   const currentDayCelestialCycleCardProps =
//     getCurrentDayCelestialCycleCardProps({
//       ...(forecastResponse.current ? forecastResponse.current : {}),
//       ...dailyForecastItemsList[0],
//     });

//   const currentDayWindCardProps = getCurrentDayWindCardProps({
//     ...(forecastResponse.current ? forecastResponse.current : { time: "" }),
//   });

//   const currentDayPressureCardProps = getCurrentDayPressureCardProps({
//     ...(forecastResponse.current ? forecastResponse.current : { time: "" }),
//   });

//   const currentDayHumidityCardProps = getCurrentDayHumidityCardProps({
//     ...(forecastResponse.current ? forecastResponse.current : { time: "" }),
//   });

//   return (
//     <FlexCol gap={8}>
//       <FlexCol>
//         <Text type="headline6">{FORECAST_LABELS_MAP.current}</Text>
//         <FlexRow stretchItems>
//           <CurrentWeatherCard {...currentWeatherCardProps} />
//         </FlexRow>
//       </FlexCol>
//       <FlexCol>
//         <Text type="headline6">{FORECAST_LABELS_MAP.todaysConditions}</Text>
//         <FlexRow stretchItems>
//           <CurrentDayCelestialCycleCard
//             {...currentDayCelestialCycleCardProps}
//           />
//           <CurrentDayWindCard {...currentDayWindCardProps} />
//           <CurrentDayPressureCard {...currentDayPressureCardProps} />
//           <CurrentDayHumidityCard {...currentDayHumidityCardProps} />
//           <PriorDayTemperatureRangeCard />
//         </FlexRow>
//       </FlexCol>
//       <FlexCol>
//         <Text type="headline6">{FORECAST_LABELS_MAP.hourly}</Text>
//         <FlexRow stretchItems>
//           {hourlyForecastItemsList.slice(0, 5).map((data) => (
//             <HourlyWeatherCard key={data.time} {...data} />
//           ))}
//         </FlexRow>
//       </FlexCol>
//       <FlexCol>
//         <Text type="headline6">{FORECAST_LABELS_MAP.sevenDays}</Text>
//         <FlexRow stretchItems>
//           {dailyTimePeriodForecastList.slice(0, 5).map((data) => (
//             <DailyTimePeriodWeatherCard key={data.time} {...data} />
//           ))}
//         </FlexRow>
//       </FlexCol>
//       <FlexCol>
//         <Text type="headline6">{FORECAST_LABELS_MAP.fourteenDays}</Text>
//         <FlexRow stretchItems>
//           {diurnalPeriodGroupsList.slice(0, 5).map((data) => (
//             <DiurnalPeriodWeatherCard key={data.time} {...data} />
//           ))}
//         </FlexRow>
//       </FlexCol>
//     </FlexCol>
//   );
// };
