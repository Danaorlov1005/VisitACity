import { Injectable, Directive } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private nextTripImgUrl;
  private city;
  private place;
  private userId;
  private tripObj: any = {};
  private tripObjToSearch: any = {};
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

  getTripObj() {
    return this.tripObj;
  }

  setTripObj(val) {
    this.tripObj = val;
  }

  getTripObjToSearch() {
    return this.tripObjToSearch;
  }

  setTripObjToSearch(val) {
    this.tripObjToSearch = val;
  }
}
