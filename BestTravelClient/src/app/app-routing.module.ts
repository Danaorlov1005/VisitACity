import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CreateTripComponent} from "./create-trip/create-trip.component"
import {LandingPageComponent} from "./landing-page/landing-page.component"

const routes: Routes = [
  { path: 'app-landing-page', component: LandingPageComponent},
  { path: 'trip-planner', component: CreateTripComponent},
  { path: '**', component: LandingPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
