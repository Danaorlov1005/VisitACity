import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CreateTripComponent} from "./create-trip/create-trip.component"
import {LandingPageComponent} from "./landing-page/landing-page.component"
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'app-landing-page', component: LandingPageComponent},
  { path: 'trip-planner', component: CreateTripComponent},
  { path: 'create-user', component: CreateUserComponent},
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
