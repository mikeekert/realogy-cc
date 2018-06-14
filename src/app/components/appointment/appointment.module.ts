import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentComponent} from './appointment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppointmentComponent],
  exports: [AppointmentComponent]
})
export class AppointmentModule { }
