import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  allTrips:any = [];

  constructor() { }

  ngOnInit() {
    this.allTrips = [{
        "city":"Paris",
        "ImagePath":"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/epfwv7krulrgh6enxqjo/ParisCityBusTour.jpg"
      }, {
        "city":"Amsterdam",
        "ImagePath":"https://cdn.getyourguide.com/img/tour_img-663438-148.jpg"
      },{
        "city":"New York",
        "ImagePath":"https://www-cdn.law.stanford.edu/wp-content/uploads/2015/05/alumni-communities-26-e1455903202401-1200x630.jpg"
      },{
        "city":"Miami",
        "ImagePath":"https://cdn.getyourguide.com/img/tour_img-948581-148.jpg"
      },{
        "city":"Moscow",
        "ImagePath":"https://scandinaviantraveler.com/sites/default/files/styles/facebook_share/public/moscow-1140x619.jpg"
      },{
        "city":"Tokyo",
        "ImagePath":"https://cdn.getyourguide.com/img/tour_img-621732-148.jpg"
      },{
        "city":"Milan",
        "ImagePath":"https://1.bp.blogspot.com/-ZhirsXp1cIk/WckwjKFws8I/AAAAAAAAAbc/vMiSqwIDu_QE_yRdvYjgf_nC68_3EDFhQCEwYBhgL/w1200-h630-p-k-no-nu/Milan.jpg"
      },{
        "city":"Rome",
        "ImagePath":"https://i2-prod.mirror.co.uk/incoming/article7752812.ece/ALTERNATES/s1200/Rome-Colosseum.jpg"
      }]
    }


}
