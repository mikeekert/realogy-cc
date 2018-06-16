export class WeatherObj {
  Temp: number;
  Weather: Weather;

  constructor(api: ApiResponse) {
    this.Temp = api.main.temp;
    this.Weather = api.weather[0];
  }
}

export interface ApiResponse {
  'weather': Weather[];
  'main': Temp;
}

interface Temp {
  'temp': number;
}

interface Weather {
  'main'?: string;
  'description'?: string;
  'icon'?: string;
}
