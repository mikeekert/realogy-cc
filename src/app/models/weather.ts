export class WeatherObj {
  Temp: number;
  Weather: Weather;
  City: string;

  constructor(api: ApiResponse) {
    this.Temp = api.main.temp;
    this.Weather = api.weather[0];
    this.City = api.name;
  }
  static convertK(K) {
    return Math.ceil(((K - 273.15 ) * 1.8) + 32);
  }
}

export interface ApiResponse {
  'weather': Weather[];
  'main': Temp;
  'name': string;
}

interface Temp {
  'temp': number;
}

interface Weather {
  'main'?: string;
  'description'?: string;
  'icon'?: string;
}


