import { Flex, Section } from "@/components";
import { type HourlyWeatherData } from "./entities";
import hourlyWeather from "./hourlyWeather.json";
import { WeatherCard } from "./features/weather-forecast/components/hourly-weather-card/HourlyWeatherCard";

function App() {
  let weatherCardProps: HourlyWeatherData[] = [];
  const fiveHourWeather = getFiveHourWeather(hourlyWeather.hourly);

  if (fiveHourWeather) {
    weatherCardProps = transformWeatherIntoCardProps(fiveHourWeather);
  }

  return (
    <Section>
      <Flex stretchItems className="flex-col sm:flex-row">
        {weatherCardProps.map((wcp, i) => {
          return <WeatherCard key={i} {...wcp} />;
        })}
      </Flex>
    </Section>
  );
}

export default App;

interface WeatherForecast {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
  precipitation_probability: number[];
  apparent_temperature: number[];
  precipitation: number[];
}

const getFiveHourWeather = (
  weatherForecast: WeatherForecast,
): WeatherForecast | null => {
  const now = new Date();

  // 1. Get the components
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");

  // 2. Format to match: "YYYY-MM-DDTHH:00"
  const currentHourString = `${year}-${month}-${day}T${hour}:00`;

  // 3. Find the index
  const currentIdx = weatherForecast.time.indexOf(currentHourString);

  // Fallback if index not found (e.g. data is out of range)
  if (currentIdx === -1) return null;

  // 4. Transform the object: slice every array inside 'hourly'
  const fiveHourForecast = Object.fromEntries(
    Object.entries(weatherForecast).map(([key, value]) => [
      key,
      value.slice(currentIdx, currentIdx + 5),
    ]),
  );

  return fiveHourForecast as WeatherForecast;
};

const transformWeatherIntoCardProps = (weatherForecast: WeatherForecast) => {
  const weatherCardProps: HourlyWeatherData[] = [];

  for (let i = 0; i < 5; i++) {
    weatherCardProps.push({
      time: weatherForecast.time[i],
      temperature_2m: weatherForecast.temperature_2m[i],
      weather_code: weatherForecast.weather_code[i],
      precipitation_probability: weatherForecast.precipitation_probability[i],
      apparent_temperature: weatherForecast.apparent_temperature[i],
      precipitation: weatherForecast.precipitation[i],
    });
  }

  return weatherCardProps;
};
