import { FlexCol, FlexRow, Section, Text } from "@/components";
import {
  groupOpenMeteoHourlyForecastByDiurnalPeriod,
  createOpenMeteoTimePeriodList,
  groupOpenMeteoHourlyForecastByDateTimePeriod,
  normalizeOpenMeteoForecastTimeInterval,
  OPEN_METEO_TIME_INTERVAL_MAP,
  type OpenMeteoForecastResponse,
  groupOpenMeteoHourlyForecastByDate,
} from "@/entities";
import {
  CurrentWeatherCard,
  getCurrentWeatherCardProps,
  getCurrentDayCelestialCycleCardProps,
  getCurrentDayWindCardProps,
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
import { getCurrentDayPressureCardProps } from "./features/weather-forecast/components/current-day-pressure-card/current-day-pressure-card.utils";
import { getCurrentDayHumidityCardProps } from "./features/weather-forecast/components/current-day-humidity-card/current-day-humidity-card.utils";

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

  const hourlyForecastGroupByDateList = groupOpenMeteoHourlyForecastByDate(
    hourlyForecastItemsList,
  );

  console.log(hourlyForecastGroupByDateList);

  const currentWeatherCardProps = getCurrentWeatherCardProps({
    ...(forecastResponse.current ? forecastResponse.current : {}),
    ...dailyForecastItemsList[0],
  });

  const currentDayCelestialCycleCardProps =
    getCurrentDayCelestialCycleCardProps({
      ...(forecastResponse.current ? forecastResponse.current : {}),
      ...dailyForecastItemsList[0],
    });

  const currentDayWindCardProps = getCurrentDayWindCardProps({
    ...(forecastResponse.current ? forecastResponse.current : { time: "" }),
  });

  const currentDayPressureCardProps = getCurrentDayPressureCardProps({
    ...(forecastResponse.current ? forecastResponse.current : { time: "" }),
  });

  const currentDayHumidityCardProps = getCurrentDayHumidityCardProps({
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
            <CurrentDayCelestialCycleCard
              {...currentDayCelestialCycleCardProps}
            />
            <CurrentDayWindCard {...currentDayWindCardProps} />
            <CurrentDayPressureCard {...currentDayPressureCardProps} />
            <CurrentDayHumidityCard {...currentDayHumidityCardProps} />
            <PriorDayTemperatureRangeCard />
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
