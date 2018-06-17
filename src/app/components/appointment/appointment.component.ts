import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})


export class AppointmentComponent implements OnInit {

  date: Date;
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  invalidDates: Array<Date>;
  appointmentForm: FormGroup;


  constructor() {
    this.appointmentForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl(),
      'date': new FormControl()
    });
  }

  ngOnInit() {
  }
}
