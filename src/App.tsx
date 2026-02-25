import { Flex, Section } from "@/components";
import {
  normalizeOpenMeteoForecastTimeInterval,
  OPEN_METEO_TIME_INTERVAL_MAP,
  type OpenMeteoForecastResponse,
} from "@/entities";
import { HourlyWeatherCard } from "@/features";
import weatherResponse from "./hourlyWeather.json";

function App() {
  const hourlyWeatherData = normalizeOpenMeteoForecastTimeInterval(
    weatherResponse as OpenMeteoForecastResponse,
    OPEN_METEO_TIME_INTERVAL_MAP.Hourly,
  ).slice(0, 5);

  return (
    <Section>
      <Flex stretchItems className="flex-col sm:flex-row">
        {hourlyWeatherData.map((data) => (
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
      </Flex>
    </Section>
  );
}

export default App;
