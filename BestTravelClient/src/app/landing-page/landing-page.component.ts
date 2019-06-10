import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  allTrips: any = [];
  isUserConnected: boolean = (this.globalService.getUser() !== undefined || this.globalService.getUser() !== null);
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/getPopularSites").subscribe(
      data => {
        this.allTrips = data;
        console.log(data);
      });
  }


}
