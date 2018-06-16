import {Component, OnInit} from '@angular/core';
import {WeatherObj, ApiResponse} from '../../models/weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  WeatherPost: WeatherObj;

  constructor() {
  }

  ngOnInit() {
    const dataObj = {
      'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
      'main': {
        'temp': 200
      }
    };
    this.WeatherPost = new WeatherObj(dataObj);
    console.log(this.WeatherPost);
  }
}
