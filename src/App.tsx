import {
  Card,
  Flex,
  FlexCol,
  FlexRow,
  Grid,
  Section,
  Text,
  type IconComponent,
} from "@/components";
import { cn } from "./utils";
import {
  normalizeOpenMeteoForecastTimeInterval,
  OPEN_METEO_TIME_INTERVAL_MAP,
  type OpenMeteoForecastResponse,
  groupOpenMeteoHourlyForecastByDate,
  formatOpenMeteoValue,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_MAP,
} from "@/entities";
// import {
//   CurrentWeatherCard,
//   FORECAST_LABELS_MAP,
//   CurrentDayCelestialCycleCard,
//   CurrentDayHumidityCard,
//   CurrentDayPressureCard,
//   CurrentDayWindCard,
//   PriorDayTemperatureRangeCard,
//   DailyTimePeriodWeatherCard,
//   DiurnalPeriodWeatherCard,
//   HourlyWeatherCard,
// } from "@/features";
import {
  WiStrongWind,
  WiHumidity,
  WiRain,
  WiRaindrop,
  WiWindDeg,
} from "./assets/icons/erikflowers-weather-icons";
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
                    className={cn("p-2", "sm:p-4", "w-full")}
                  >
                    <FlexRow justify="between" align="center">
                      <FlexCol>
                        <Text>
                          {formatOpenMeteoValue.hourMarker(hourlyListItem.time)}
                        </Text>
                        <Flex
                          direction={{ base: "col", sm: "row" }}
                          gap={{ base: 0, sm: 2 }}
                          align={{ base: "start", sm: "center" }}
                        >
                          <FlexRow gap={2} align="center">
                            <Icon className="w-8 sm:w-15"></Icon>
                            <Text type="headline2">
                              {formatOpenMeteoValue.temperature(
                                hourlyListItem.temperature_2m,
                              )}
                            </Text>
                          </FlexRow>
                          <Flex
                            direction={{ base: "col-reverse", sm: "col" }}
                            gap={0}
                          >
                            <Text>{condition}</Text>
                            <Text type="caption">
                              {formatOpenMeteoValue.apparentTemperature(
                                hourlyListItem.apparent_temperature,
                              )}
                            </Text>
                          </Flex>
                        </Flex>
                      </FlexCol>
                      <Flex
                        direction={{ base: "col", sm: "row" }}
                        gap={{ base: 0, sm: 16 }}
                        className="lg:pr-32"
                      >
                        <Grid
                          cols={2}
                          className={cn("gap-x-1", "gap-x-2", "w-full")}
                        >
                          <CardItem
                            Icon={WiWindDeg}
                            mainLabel={"Wind"}
                            secondaryLabel={"20 km/h E"}
                          />
                          <CardItem
                            Icon={WiStrongWind}
                            mainLabel={"Wind Gust"}
                            secondaryLabel={"38 km/h"}
                          />
                          <CardItem
                            Icon={WiHumidity}
                            mainLabel={"Humidity"}
                            secondaryLabel={"88%"}
                          />
                        </Grid>
                        <Grid
                          cols={2}
                          className={cn("gap-x-1", "gap-x-2", "w-full")}
                        >
                          <CardItem
                            Icon={WiRain}
                            mainLabel={"P.O.P."}
                            secondaryLabel={"60%"}
                          />
                          <CardItem
                            Icon={WiRaindrop}
                            mainLabel={"Rain"}
                            secondaryLabel={"0.4mm"}
                          />
                        </Grid>
                      </Flex>
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

const CardItem = ({
  Icon,
  mainLabel,
  secondaryLabel,
}: {
  Icon: IconComponent;
  mainLabel: string;
  secondaryLabel: string;
}) => {
  return (
    <>
      <FlexRow align="center" gap={1}>
        <Icon className="w-4" />
        <Text type="body2">{mainLabel}</Text>
      </FlexRow>
      <Text type="body2">{secondaryLabel}</Text>
    </>
  );
};

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
