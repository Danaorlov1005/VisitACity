import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.css']
})
export class UserTripsComponent implements OnInit {

  allTrips: any;

  constructor(private http: HttpClient, private globalService: GlobalService) {

  }

  ngOnInit() {
    const params = new HttpParams().set('UserName', this.globalService.getUser());
    this.http.get('http://localhost:3000/getTripsForUser', {params}).subscribe(
      data => {
        this.allTrips = data;
      });
  }
}
