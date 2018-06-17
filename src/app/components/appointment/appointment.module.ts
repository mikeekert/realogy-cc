import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentComponent} from './appointment.component';
import {MatDatepickerModule, MatFormField} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormField
  ],
  declarations: [AppointmentComponent],
  exports: [AppointmentComponent, MatFormField, MatDatepickerModule]
})
export class AppointmentModule { }
