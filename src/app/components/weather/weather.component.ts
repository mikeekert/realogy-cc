import {Component, OnInit} from '@angular/core';
import {WeatherObj} from '../../models/weather';
import {WeatherService} from '../../services/weather.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class WeatherComponent implements OnInit {
  weatherData: WeatherObj;
  zipCodeGroup: FormGroup;
  zipcode: FormControl;
  zip: number;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.zipcode = new FormControl('',
      [Validators.required,
      Validators.pattern('^\\d{5}$')]);
    this.zip = null;

    this.zipCodeGroup = new FormGroup({
      zipcode: this.zipcode
    });
  }

  sendZip() {
    this.weatherData = undefined;
    const zipData = this.zipCodeGroup.value;
    if (zipData) {
      setTimeout(() => {
        this
          .weatherService.getWeather(zipData)
          .subscribe(data => {
            this.weatherData = new WeatherObj(data);
            this.weatherData.Temp = WeatherObj.ConvertKelvinToFahrenheit(this.weatherData.Temp);
          }, (error) => {
            return error;
            // TODO: prep for errors
          });
      }, 600);
    }
  }

}
