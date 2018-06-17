import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers: [NgbDatepickerConfig]
})


export class AppointmentComponent implements OnInit {
  fname: FormControl;
  lastname: FormControl;
  email: FormControl;
  date: FormControl;
  appointmentForm: FormGroup

  ngOnInit() {
    this.fname = new FormControl('', Validators.required);
    this.lastname = new FormControl('');
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.date = new FormControl('', Validators.required);

    this.appointmentForm = new FormGroup({
      fname: this.fname,
      lastname: this.lastname,
      email: this.email,
      date: this.date
    });
  }

  constructor(config: NgbDatepickerConfig) {
    const now = new Date();
    config.minDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    config.maxDate = {year: 2099, month: 12, day: 31};
  }
}
