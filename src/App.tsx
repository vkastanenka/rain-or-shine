import { cn } from "@/utils";
import { Flex, Section, Text } from "@/components";
import {
  WMO_CODES_ICONS_FILL_MAP,
  WMO_CODES_MAP,
  WMO_RAIN_CODES_MAP,
  WMO_SNOW_CODES_MAP,
} from "./components/ui/icon/WmoIcons";
import { Rain, Snowflake, Snow } from "./assets/icons/meteocons/fill";
import hourlyWeather from "./hourlyWeather.json";

function App() {
  let weatherCardProps: WeatherCardProps[] = [];
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
  const weatherCardProps: WeatherCardProps[] = [];

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

interface WeatherCardProps {
  time: string;
  temperature_2m: number;
  weather_code: number;
  precipitation_probability: number;
  apparent_temperature: number;
  precipitation: number;
}

const WeatherCard = ({
  time,
  temperature_2m,
  weather_code,
  precipitation_probability,
  apparent_temperature,
  precipitation,
}: WeatherCardProps) => {
  const iconMainType = hourlyWeather.current.is_day === 0 ? "day" : "night";
  const date = new Date(time);

  // Get the 12-hour format hour
  const hours24 = date.getHours();
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;

  const IconMain = WMO_CODES_ICONS_FILL_MAP[weather_code][iconMainType];

  let IconPrecipitationAmount;
  let IconPrecipitationProbability = Rain;

  if (precipitation > 0) {
    if (WMO_RAIN_CODES_MAP[weather_code]) {
      IconPrecipitationAmount = Rain;
    }

    if (WMO_SNOW_CODES_MAP[weather_code]) {
      IconPrecipitationAmount = Snowflake;
    }
  }

  if (WMO_SNOW_CODES_MAP[weather_code]) {
    IconPrecipitationProbability = Snow;
  }

  const maxPrecipitationHeight = 1000;
  const maxPrecipitationMm = 150;

  let height = 0;

  if (precipitation > 0) {
    const calculated = Math.floor(
      (precipitation / maxPrecipitationMm) * maxPrecipitationHeight,
    );
    height = Math.max(calculated, 1); // Ensure at least 1px if raining
    height = Math.min(height, maxPrecipitationHeight); // Ensure cap at 45px
  }

  return (
    <div className="bg-mauve-700 rounded-lg pt-3 overflow-hidden">
      <Flex
        direction={{ base: "col" }}
        align={{ base: "center" }}
        justify={{ base: "between" }}
        gap={4}
        className="w-full"
      >
        <Flex
          direction={{ base: "col" }}
          align={{ base: "center" }}
          className="w-full"
        >
          {/* Time */}
          <Text>{`${hours12}${ampm}`}</Text>
          {/* Weather Code Icon */}
          <IconMain size={48} />
          {/* Temperature */}
          <Text type="headline4">{`${temperature_2m}°`}</Text>
          {/* Apparent Temperature */}
          <Text type="caption">{`Feel ${apparent_temperature}`}</Text>
          {/* Precipitation Coverage */}
          <Flex gap={1}>
            <IconPrecipitationProbability />
            <Text>{`${precipitation_probability}%`}</Text>
          </Flex>
        </Flex>

        {/* Precipitation Scale */}
        {precipitation > 0 && IconPrecipitationAmount ? (
          <Flex
            gap={1}
            direction={{ base: "col" }}
            align={{ base: "center" }}
            className="w-full"
          >
            <Flex gap={1}>
              {/* Precipitation Amount Icon */}
              <IconPrecipitationAmount />
              {/* Precipitation AMount */}
              <Text type="body2">{`${precipitation}mm`}</Text>
            </Flex>

            {/* Precipitation Amount Indicator */}
            <div className={cn("w-full", "opacity-80")}>
              <div className={cn("w-full", "h-0.5", "bg-neutral-50")}></div>
              <div
                className={cn("w-full", "bg-neutral-300")}
                style={{ height: `${height}px` }}
              ></div>
            </div>
          </Flex>
        ) : null}
      </Flex>
    </div>
  );
};
