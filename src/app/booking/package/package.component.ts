import { Component, OnInit } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';
import { stringify } from 'querystring';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  isSelected ?:boolean;
  _numberofparticipents? :number;
  _descriptionLong:string;
  _descriptionShort:string;
  price:number;


constructor(descriptionLong:string, descriptionShort:string, Price:number){
this._descriptionLong = descriptionLong;
this._descriptionShort = descriptionShort;
this.price = Price;

}

  ngOnInit() {
  }

}
