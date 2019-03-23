import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import {FormControl} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
  public origin: any;
  public destination: any;

  res:any = [];
  location = "פריז";
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private http: HttpClient) {}

  ngOnInit() {
    this.initMap();
  }

  initMap(){
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(cities)']
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;

          //Draw a path on the map
          this.getDirection(this.latitude, this.longitude);
        });
      });
    });
  }

  //setting a pin in the selected location
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  //draw a path on the map
  getDirection(latitude, longitude) {
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: latitude, lng: longitude };

    /*this.origin = 'Taipei Main Station';
    this.destination = destination;*/
  }
}
