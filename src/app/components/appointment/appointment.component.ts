import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {Appointment} from '../../models/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers: [NgbDatepickerConfig]
})


export class AppointmentComponent implements OnInit {
  @Input() displayAppointment: Appointment;
  appointment: Appointment;

  fname: FormControl;
  lastname: FormControl;
  email: FormControl;
  date: FormControl;
  appointmentForm: FormGroup;

  pending: boolean;
  complete: boolean;

  constructor(config: NgbDatepickerConfig) {
    const now = new Date();
    config.minDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    config.maxDate = {year: 2099, month: 12, day: 31};
  }
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

  send() {
    this.pending = true;
    setTimeout(() => {
      this.pending = false;
      this.complete = true;
      this.displayAppointment = this.appointmentPending();
    }, 3000);
  }

  appointmentPending(): Appointment {
    const formApp = this.appointmentForm.value;
    return new Appointment(formApp);
  }
}
