import { Injectable, Directive } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private nextTripImgUrl;
  private city;
  private place;

  constructor() { }

  setNextTripImgUrl(val) {
    this.nextTripImgUrl = val;
  }
  getNextTripImgUrl() {
    return this.nextTripImgUrl;
  }

  getCity(){
    return this.city;
  }

  setCity(val){
    this.city = val;
  }

  setPlace(val){
    this.place = val;
  }

  getPlace(){
    return this.place;
  }
}
