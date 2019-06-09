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
  dayNames: any = ['היום הראשון שלך','היום השני שלך','היום השלישי שלך','היום הרביעי שלך','היום בחמישי שלך','היום השישי שלך', 'היום השביעי שלך'];

  constructor(private globalService: GlobalService, private http: HttpClient) {}

  ngOnInit() {
    window.scrollTo(0,95);
    this.getTripObject();
  }

  getTripObject() {
    let obj = this.globalService.getTripObjToSearch();
    this.http.post('http://localhost:3000/createTripByParameters', obj)
      .subscribe(res => {
        console.log(res);
        this.days = res;
        this.globalService.setTripObj(res);
      });
  }

  changeImage(val) {
    this.activityPerDayImgUrl = val;
  }
}
