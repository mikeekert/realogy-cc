import {Component, Input, OnInit} from '@angular/core';
import {ComponentType} from '@angular/cdk/portal';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})


export class AppointmentComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  @Input()
  calendarHeaderComponent: ComponentType<any>;
  constructor() { }

  ngOnInit() {
  }

}
