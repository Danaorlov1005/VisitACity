import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

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
  days:any = this.globalService.getTripObj();
  dayNames:any = ['היום הראשון שלך','היום השני שלך','היום השלישי שלך','היום הרביעי שלך','היום בחמישי שלך','היום השישי שלך', 'היום השביעי שלך'];

  constructor(private globalService:GlobalService) {
    this.days = this.globalService.getTripObj();
  }

  ngOnInit() {
    window.scrollTo(0,95);
    this.days = this.globalService.getTripObj();
    console.log(this.days[0]);
  }

  here(){
    this.globalService.getTripObj();
  }
}
