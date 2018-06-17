import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
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
    this.email = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);

    this.appointmentForm = new FormGroup({
      fname: this.fname,
      lastname: this.lastname,
      email: this.email,
      date: this.date
    });
  }

  // appointmentForm = new FormGroup({
  //   fname: new FormControl('', [
  //     Validators.required,
  //   ]),
  //   lname: new FormControl(),
  //   email: new FormControl(),
  //   date: new FormControl()
  // });

  constructor(private formBuilder: FormBuilder) {

  }
}
