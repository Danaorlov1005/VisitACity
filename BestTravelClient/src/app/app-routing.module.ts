import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CreateTripComponent} from "./create-trip/create-trip.component"
import {LandingPageComponent} from "./landing-page/landing-page.component"
<<<<<<< HEAD
import { CreateUserComponent } from './create-user/create-user.component';
=======
import {FlightLocatorComponent} from "./flight-locator/flight-locator.component";
>>>>>>> 2e259e26827017801028a2eeec675db99a0b6c5e

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'app-landing-page', component: LandingPageComponent},
  { path: 'trip-planner', component: CreateTripComponent},
<<<<<<< HEAD
  { path: 'create-user', component: CreateUserComponent},
=======
  { path: 'FlightLocator', component: FlightLocatorComponent},
>>>>>>> 2e259e26827017801028a2eeec675db99a0b6c5e
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
