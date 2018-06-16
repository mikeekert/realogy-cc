import {Component, OnInit} from '@angular/core';
import {WeatherObj} from '../../models/weather';
import {WeatherService} from '../../services/weather.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherObj;
  zipCode: FormGroup;
  zip: number;

  constructor(private weatherService: WeatherService) {
    this.zipCode = new FormGroup({
      'zipcode': new FormControl(this.zip),
    });
  }

  ngOnInit() {
    this.zip = null;
  }

  sendZip() {
    console.log(this.zipCode.value);
    this
      .weatherService.getWeather(this.zipCode.value)
      .subscribe(data => {
        this.weatherData = new WeatherObj(data);
      }, (error) => {
        return error;
      });
  }
}
