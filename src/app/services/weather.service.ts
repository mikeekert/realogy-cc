import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiUriBase: string;

  constructor(private http: HttpClient) {
    this.apiUriBase = 'http://api.openweathermap.org/data/2.5';
  }

  // http://api.openweathermap.org/data/2.5/weather?zip=55420&appid=b51580d4aa072f200e5e9d23f569a333
  // TODO: Normally, would put API Key into an environment variable.
  getWeather(zip) {
    const feedApiUrn = `weather?zip=${zip.zipcode}&appid=b51580d4aa072f200e5e9d23f569a333`;
    const apiUrl = `${this.apiUriBase}/${feedApiUrn}`;
    return this.http.get<ApiResponse>(apiUrl);
  }
}
