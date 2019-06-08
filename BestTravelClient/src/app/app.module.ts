/// <reference types="@types/googlemaps" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { FormsModule, ReactiveFormsModule, } from "@angular/forms";
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FlightLocatorComponent } from './flight-locator/flight-locator.component';
import { AgmDirectionModule } from 'agm-direction';
import { CreateUserComponent } from './create-user/create-user.component';
import { DisplayTripComponent } from './display-trip/display-trip.component';
import { global } from './global';
import { GlobalService } from './global.service';


declare let google: any;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateTripComponent,
    LandingPageComponent,
    FlightLocatorComponent,
    CreateUserComponent,
    DisplayTripComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBts53vgjeOpiVy962cJUvS8D021tTgpdI",
      libraries: ["places"]
    }),
    AgmDirectionModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
