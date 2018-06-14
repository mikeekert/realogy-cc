import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppointmentModule} from './appointment/appointment.module';
import {WeatherModule} from './weather/weather.module';
import {PropertyModule} from './property/property.module';

@NgModule({
  declarations: [],
  imports: [
    FooterComponent,
    HeaderComponent,
    BrowserModule,
    AppointmentModule,
    WeatherModule,
    PropertyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
