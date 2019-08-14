import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-trip',
  templateUrl: './display-trip.component.html',
  styleUrls: ['./display-trip.component.css']
})
export class DisplayTripComponent implements OnInit {
  date: string = new Date().toLocaleDateString();
  mainImgUrl: string = this.globalService.getNextTripImgUrl();
  activityPerDayImgUrl: string = this.globalService.getNextTripImgUrl();
  city: string = this.globalService.getCity();
  days: any = {};
  canSave: boolean = this.globalService.getUser == null ? false : true;
/*
  this.days.places:any = {};
*/
  dayNames: any = ['היום הראשון שלך', 'היום השני שלך', 'היום השלישי שלך', 'היום הרביעי שלך', 'היום בחמישי שלך', 'היום השישי שלך', 'היום השביעי שלך'];

  constructor(private globalService: GlobalService, private http: HttpClient) { }

  ngOnInit() {
    window.scrollTo(0, 95);
    this.getTripObject();
    this.canSave = this.globalService.getUser() == null ? false : true;
  }

  getTripObject() {
    const obj = this.globalService.getTripPreferencesObjToSearch();
    const user = this.globalService.getUser();
    const imageUrl = this.globalService.getNextTripImgUrl();
    const city = this.globalService.getCity();
    this.http.post('http://localhost:3000/createTripByParameters', { obj, user, imageUrl, city })
      .subscribe(res => {
        console.log(res);
        if (!res)
          window.alert("המשתמש לא מחובר לאתר!")
        this.globalService.setTripPlan(res);
        this.days = res;
        this.globalService.setTripPreferencesObj(res);
      });
  }

  getRecommendations() {
    const obj = this.globalService.getTripPreferencesObjToSearch();
    const user = this.globalService.getUser();
    const imageUrl = this.globalService.getNextTripImgUrl();
    const city = this.globalService.getCity();
    const tripId = this.globalService.getTripPlan().id;
    this.http.post('http://localhost:3000/getRecommendations', { tripId, obj, user, imageUrl, city })
      .subscribe(res => {
        console.log(res);
        if (!res)
          window.alert("המשתמש לא מחובר לאתר!")
      });
  }

  SaveTrip() {
    const tripId = this.globalService.getTripPlan().id;
    this.http.post('http://localhost:3000/saveTrip', { tripId })
      .subscribe(res => {
        console.log(res);
        this.days = res;
        this.globalService.setTripPreferencesObj(res);
      });
  }

  changeImage(val) {
    this.activityPerDayImgUrl = val;
  }
}
