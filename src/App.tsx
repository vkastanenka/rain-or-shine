import { FlexCol, FlexRow, Section, Text } from "@/components";
import {
  groupOpenMeteoHourlyForecastByDiurnalPeriod,
  createOpenMeteoTimePeriodList,
  groupOpenMeteoHourlyForecastByDateTimePeriod,
  normalizeOpenMeteoForecastTimeInterval,
  OPEN_METEO_TIME_INTERVAL_MAP,
  type OpenMeteoForecastResponse,
} from "@/entities";
import {
  CurrentWeatherCard,
  getCurrentWeatherCardProps,
  getCurrentDayCelestialCycleCardProps,
  getCurrentDayWindCardProps,
  FORECAST_LABELS_MAP,
  CurrentDayCeilingCard,
  CurrentDayCelestialCycleCard,
  CurrentDayHumidityCard,
  CurrentDayPressureCard,
  CurrentDayVisibilityCard,
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

  const dailyForecastItemsList = normalizeOpenMeteoForecastTimeInterval(
    forecastResponse,
    OPEN_METEO_TIME_INTERVAL_MAP.Daily,
  );

  const dateTimePeriodGroupsList = groupOpenMeteoHourlyForecastByDateTimePeriod(
    hourlyForecastItemsList,
  );

  const dailyTimePeriodForecastList = createOpenMeteoTimePeriodList(
    dateTimePeriodGroupsList,
  );

  const diurnalPeriodGroupsList = groupOpenMeteoHourlyForecastByDiurnalPeriod(
    hourlyForecastItemsList,
  );

  const currentWeatherCardProps = getCurrentWeatherCardProps({
    ...(forecastResponse.current ? forecastResponse.current : {}),
    ...dailyForecastItemsList[0],
  });

  const currentDayCelestialCycleCardProps = getCurrentDayCelestialCycleCardProps({
    ...(forecastResponse.current ? forecastResponse.current : {}),
    ...dailyForecastItemsList[0],
  });

  const currentDayWindCardProps = getCurrentDayWindCardProps({
    ...(forecastResponse.current ? forecastResponse.current : { time: "" }),
  });

  return (
    <Section>
      <FlexCol gap={8}>
        <FlexCol>
          <Text type="headline6">{FORECAST_LABELS_MAP.current}</Text>
          <FlexRow stretchItems>
            <CurrentWeatherCard {...currentWeatherCardProps} />
          </FlexRow>
        </FlexCol>
        <FlexCol>
          <Text type="headline6">{FORECAST_LABELS_MAP.todaysConditions}</Text>
          <FlexRow stretchItems>
            <CurrentDayCelestialCycleCard {...currentDayCelestialCycleCardProps} />
            <CurrentDayWindCard {...currentDayWindCardProps} />
            <CurrentDayPressureCard />
            {/* <CurrentDayHumidityCard /> */}
            {/* <CurrentDayVisibilityCard /> */}
            {/* <CurrentDayCeilingCard /> */}
            {/* <PriorDayTemperatureRangeCard /> */}
            {/* Air Quality? */}
            {/* UV? */}
          </FlexRow>
        </FlexCol>
        <FlexCol>
          <Text type="headline6">{FORECAST_LABELS_MAP.hourly}</Text>
          <FlexRow stretchItems>
            {hourlyForecastItemsList.slice(0, 5).map((data) => (
              <HourlyWeatherCard key={data.time} {...data} />
            ))}
          </FlexRow>
        </FlexCol>
        <FlexCol>
          <Text type="headline6">{FORECAST_LABELS_MAP.sevenDays}</Text>
          <FlexRow stretchItems>
            {dailyTimePeriodForecastList.slice(0, 5).map((data) => (
              <DailyTimePeriodWeatherCard key={data.time} {...data} />
            ))}
          </FlexRow>
        </FlexCol>
        <FlexCol>
          <Text type="headline6">{FORECAST_LABELS_MAP.fourteenDays}</Text>
          <FlexRow stretchItems>
            {diurnalPeriodGroupsList.slice(0, 5).map((data) => (
              <DiurnalPeriodWeatherCard key={data.time} {...data} />
            ))}
          </FlexRow>
        </FlexCol>
      </FlexCol>
    </Section>
  );
}

export default App;
