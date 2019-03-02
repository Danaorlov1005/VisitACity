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
        "city":"פריז",
        "ImagePath":"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/epfwv7krulrgh6enxqjo/ParisCityBusTour.jpg",
        "title":"יעד מושלם לאוהבי קולינריה",
        "info":"פריז היא בירת צרפת ובירת חבל איל דה פרנס. היא שוכנת בעיקול הנהר סן, במרכזו של האגן הפריזאי, בין מפגש הנהרות מארן וסן במעלה הזרם, ובין הנהרות אואז וסן במורד הזרם. פריז היא העיר הגדולה בצרפת ואחד ממוקדי ההשכלה, הדת והכוח הראשיים של אירופה, כבר מאז המאה העשירית."
      }, {
        "city":"אמסטרדם",
        "ImagePath":"https://cdn.getyourguide.com/img/tour_img-663438-148.jpg",
        "title":"df",
        "info":""
      },{
        "city":"ניו יורק",
        "ImagePath":"https://www-cdn.law.stanford.edu/wp-content/uploads/2015/05/alumni-communities-26-e1455903202401-1200x630.jpg",
      "title":"",
      "info":""
      },{
        "city":"Miami",
        "ImagePath":"https://cdn.getyourguide.com/img/tour_img-948581-148.jpg",
      "title":"",
      "info":""
      },{
        "city":"Moscow",
        "ImagePath":"https://scandinaviantraveler.com/sites/default/files/styles/facebook_share/public/moscow-1140x619.jpg",
      "title":"",
      "info":""
      },{
        "city":"Tokyo",
        "ImagePath":"https://cdn.getyourguide.com/img/tour_img-621732-148.jpg",
      "title":"",
      "info":""
      },{
        "city":"Milan",
        "ImagePath":"https://1.bp.blogspot.com/-ZhirsXp1cIk/WckwjKFws8I/AAAAAAAAAbc/vMiSqwIDu_QE_yRdvYjgf_nC68_3EDFhQCEwYBhgL/w1200-h630-p-k-no-nu/Milan.jpg",
      "title":"",
      "info":""
      },{
        "city":"Rome",
        "ImagePath":"https://i2-prod.mirror.co.uk/incoming/article7752812.ece/ALTERNATES/s1200/Rome-Colosseum.jpg",
      "title":"",
      "info":""
      }]
    }


}
