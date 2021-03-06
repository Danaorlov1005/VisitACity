import { Component, OnInit, ViewChild, Injectable, NgZone} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';

export class tripObject{
  user: string;
  tripName: string;
  location: location;
  duration: number;
  preferences: preferences;

  constructor(tripName: string, location: location, duration: number, preferences: preferences) {
    this.tripName = tripName;
    this.location = location;
    this.duration = duration;
    this.preferences = preferences;
  }
}

export class location{
  x: number;
  y: number;

  constructor(x : number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class preferences{
  nature: number;
  shopping: number;
  family: number;
  food: number;
  nightLife: number;
  culture: number;

  constructor(nature: number, shopping: number, family: number, food: number, nightLife: number, culture: number){
    this.nature = nature;
    this.shopping = shopping;
    this.family = family;
    this.food = food;
    this.nightLife = nightLife;
    this.culture = culture;
  }
}

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']})
@Injectable()
export class CreateTripComponent implements OnInit {
  public origin: any;
  public destination: any;

  res:any = [];
  location:any = null;
  tripObject:any = [];

  // travel preferences
  nature:number = 2;
  family:number = 2;
  food:number = 2;
  mightLife:number = 2;
  culture:number = 2;
  shopping:number = 2;
  duration:number = 3;

  mapHeight:any;

  // map properties
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  // google places photo
  photoUrl;

  @ViewChild('search')
  public searchElementRef: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private http: HttpClient,
    private globalService: GlobalService) {}

  ngOnInit() {
    this.initMap();
    this.mapHeight = document.getElementById('side-panel').offsetHeight;
  }

  initMap() {
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(cities)']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;

          this.location = place.name;

          // Draw a path on the map
          this.getDirection(this.latitude, this.longitude);

          // set the photo of the  place
          if(place.photos == null){
            this.photoUrl = "https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg";
          }else if(place.photos[1] != null){
            this.photoUrl = place.photos[1].getUrl({'maxWidth': 6000, 'maxHeight': 1000}  );
          }else{
            this.photoUrl = place.photos[0].getUrl({'maxWidth': 6000, 'maxHeight': 1000}  );
          }

          this.globalService.setCity(this.location);
          this.globalService.setNextTripImgUrl(this.photoUrl);
          this.globalService.setPlace(place);
        });
      });
    });
  }

  // setting a pin in the selected location
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  // draw a path on the map
  getDirection(latitude, longitude) {
    this.origin = 'ראשון לציון';
    this.destination = { lat: latitude, lng: longitude };
  }

  // create a new trip
  createTrip() {
    // create the trip object to send to the server and save it to global to use it later
    this.latitude = parseFloat(this.latitude.toFixed(5));
    this.longitude = parseFloat(this.longitude.toFixed(5));
    let location1 = new location(this.latitude, this.longitude);
    let preferences1 = new preferences(this.nature, this.family, this.food, this.mightLife, this.culture, this.shopping );
    let obj = new tripObject( "הטיול שלי ל" + this.location, location1 , this.duration, preferences1);
    this.globalService.setTripObjToSearch(obj);
  }
}

