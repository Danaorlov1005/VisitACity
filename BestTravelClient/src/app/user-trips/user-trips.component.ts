import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.http.get('http://localhost:3000/getTripsForUser', {params: this.globalService.getUser()}).subscribe(
      data => {
        this.allTrips = data;
      });
  }


}
