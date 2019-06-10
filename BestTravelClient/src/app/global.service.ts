import { Injectable, Directive } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private nextTripImgUrl;
  private city;
  private place;
  private userId: any = {};
  private tripPreferencesObj: any = {};
  private tripPreferencesObjToSearch: any = {};
  private currentTripPlan: any = {};

  constructor() { }

  setUser(email: string) {
    this.userId = email;
  }
  getUser() {
    return this.userId;
  }
  setNextTripImgUrl(val) {
    this.nextTripImgUrl = val;
  }
  getNextTripImgUrl() {
    return this.nextTripImgUrl;
  }

  setTripPlan(result) {
    this.currentTripPlan = result;
    console.log(this.currentTripPlan);
  }

  getTripPlan() {
    return this.currentTripPlan;
  }

  getCity() {
    return this.city;
  }

  setCity(val) {
    this.city = val;
  }

  setPlace(val) {
    this.place = val;
  }

  getPlace() {
    return this.place;
  }

  getTripPreferencesObj() {
    return this.tripPreferencesObj;
  }

  setTripPreferencesObj(val) {
    this.tripPreferencesObj = val;
  }

  getTripPreferencesObjToSearch() {
    return this.tripPreferencesObjToSearch;
  }

  setTripObjToSearch(val) {
    this.tripPreferencesObjToSearch = val;
  }
}
