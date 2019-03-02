import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  allTrips:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/getPopularSites").subscribe(
      data => {
        this.allTrips = data;
      });
  }


}
