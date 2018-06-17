import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppointmentModule} from './appointment/appointment.module';
import {WeatherobjModule} from './weather/weatherobj.module';
import {PropertyModule} from './property/property.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, AppComponent],
  imports: [
    BrowserModule,
    AppointmentModule,
    WeatherobjModule,
    PropertyModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
