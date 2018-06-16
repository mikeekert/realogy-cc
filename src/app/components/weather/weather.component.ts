import {Component, OnInit} from '@angular/core';
import {WeatherObj} from '../../models/weather';
import {WeatherService} from '../../services/weather.service';
import {FormControl, FormGroup} from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {debug} from 'util';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class WeatherComponent implements OnInit {
  weatherData: WeatherObj;
  zipCode: FormGroup;
  zip: number;
  show = false;

  constructor(private weatherService: WeatherService) {
    this.zipCode = new FormGroup({
      'zipcode': new FormControl(this.zip),
    });
  }

  ngOnInit() {
    this.zip = null;
  }

  sendZip() {
    this.weatherData = undefined;
    setTimeout(() => {
      this
        .weatherService.getWeather(this.zipCode.value)
        .subscribe(data => {
          this.weatherData = new WeatherObj(data);
          this.weatherData.Temp = WeatherObj.convertK(this.weatherData.Temp);
        }, (error) => {
          return error;
        });
    }, 600);

  }

}
