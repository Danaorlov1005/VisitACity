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
  isUserConnected:boolean = this.globalService.getUser == null ? false:true;


  constructor(private http: HttpClient, private globalService: GlobalService) { }

  ngOnInit() {
    this.isUserConnected = this.globalService.getUser() == null ? false:true;

    this.http.get("http://localhost:3000/getPopularSites").subscribe(
      data => {
        this.allTrips = data;
        console.log(data);
      });
  }


}
