/**
 * Created by Veronika on 25/05/2019.
 */
import { Injectable } from "@angular/core";


@Injectable()
export class global {

  choosenLocation:any;


  setChoosenLocation(data){
    this.choosenLocation = data;
  }

}
