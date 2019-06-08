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
  city: string = this.globalService.getCity();
  days:any = this.globalService.getTripObj();

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    window.scrollTo(0,100);
  }
}
