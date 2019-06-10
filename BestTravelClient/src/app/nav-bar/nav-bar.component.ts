import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  canSave;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.canSave = this.globalService.getUser == null ? false:true;
  }

}
