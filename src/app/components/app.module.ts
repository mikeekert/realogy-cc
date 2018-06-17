import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppointmentModule} from './appointment/appointment.module';
import {WeatherobjModule} from './weather/weatherobj.module';
import {PropertyModule} from './property/property.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, AppComponent],
  imports: [
    BrowserModule,
    AppointmentModule,
    WeatherobjModule,
    PropertyModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
