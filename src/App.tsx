import { FlexCol, FlexRow, Section, Text } from "@/components";
import {
  createOpenMeteoDiurnalPeriodList,
  groupOpenMeteoHourlyForecastByDiurnalPeriod,
  createOpenMeteoDailyTimePeriodList,
  groupOpenMeteoHourlyForecastByDateTimePeriod,
  normalizeOpenMeteoForecastTimeInterval,
  OPEN_METEO_TIME_INTERVAL_MAP,
  type OpenMeteoForecastResponse,
} from "@/entities";
import { DailyTimePeriodWeatherCard, HourlyWeatherCard } from "@/features";
import weatherResponse from "./hourlyWeather.json";

function App() {
  const hourlyForecastItemsList = normalizeOpenMeteoForecastTimeInterval(
    weatherResponse as OpenMeteoForecastResponse,
    OPEN_METEO_TIME_INTERVAL_MAP.Hourly,
  );

  const dateTimePeriodGroupsList = groupOpenMeteoHourlyForecastByDateTimePeriod(
    hourlyForecastItemsList,
  );

  const dailyTimePeriodForecastList = createOpenMeteoDailyTimePeriodList(
    dateTimePeriodGroupsList,
  );

  const diurnalPeriodGroupsList = groupOpenMeteoHourlyForecastByDiurnalPeriod(
    hourlyForecastItemsList,
  );

  // const diurnalPeriodForecastList = createOpenMeteoDiurnalPeriodList(
  //   diurnalPeriodGroupsList,
  // );

  console.log("diurnalPeriodGroupsList", diurnalPeriodGroupsList);

  console.log("dateTimePeriodGroupsList", dateTimePeriodGroupsList);

  return (
    <Section>
      <FlexCol gap={8}>
        <FlexCol>
          <Text type="headline6">Hourly</Text>
          <FlexRow stretchItems>
            {hourlyForecastItemsList.slice(0, 5).map((data) => (
              <HourlyWeatherCard
                key={data.time}
                apparent_temperature={data.apparent_temperature}
                is_day={data.is_day}
                precipitation_probability={data.precipitation_probability}
                precipitation={data.precipitation_probability}
                temperature_2m={data.temperature_2m}
                time={data.time}
                weather_code={data.weather_code}
              />
            ))}
          </FlexRow>
        </FlexCol>
        <FlexCol>
          <Text type="headline6">7 Days</Text>
          <FlexRow stretchItems>
            {dailyTimePeriodForecastList.slice(0, 5).map((data) => (
              <DailyTimePeriodWeatherCard
                key={data.time}
                apparent_temperature={data.apparent_temperature}
                is_day={data.is_day}
                precipitation_probability={data.precipitation_probability}
                precipitation={data.precipitation_probability}
                temperature_2m={data.temperature_2m}
                time={data.time}
                timePeriod={data.timePeriod}
                weather_code={data.weather_code}
              />
            ))}
          </FlexRow>
        </FlexCol>
      </FlexCol>
    </Section>
  );
}

export default App;
