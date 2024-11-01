export interface TemperatureRange {
  min: number;
  max: number;
}

export interface Description {
  description: string;
}

export interface DailyForecast {
  day: string;
  temperature: TemperatureRange;
  weather: Description[];
}

export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  pressure: number;
  weather_condition: string;
  weekly?: DailyForecast[];
}
