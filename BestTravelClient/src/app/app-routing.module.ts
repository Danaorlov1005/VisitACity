import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CreateTripComponent} from "./create-trip/create-trip.component"
import {LandingPageComponent} from "./landing-page/landing-page.component"
import { CreateUserComponent } from './create-user/create-user.component';
import {FlightLocatorComponent} from "./flight-locator/flight-locator.component";
import {DisplayTripComponent} from "./display-trip/display-trip.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'app-landing-page', component: LandingPageComponent},
  { path: 'trip-planner', component: CreateTripComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'FlightLocator', component: FlightLocatorComponent},
  { path: 'DisplayTripComponent', component: DisplayTripComponent},
  { path: '**', component: LandingPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
