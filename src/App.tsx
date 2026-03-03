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
  DailyTimePeriodWeatherCard,
  DiurnalPeriodWeatherCard,
  FORECAST_LABELS_MAP,
  HourlyWeatherCard,
} from "@/features";
import weatherResponse from "./hourlyWeather.json";

function App() {
  const hourlyForecastItemsList = normalizeOpenMeteoForecastTimeInterval(
    weatherResponse as OpenMeteoForecastResponse,
    OPEN_METEO_TIME_INTERVAL_MAP.Hourly,
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

  return (
    <Section>
      <FlexCol gap={8}>
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
