import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
    _name: string;
    _duration?:number;
    _numberofparticipents?:number;
    _price?:number;
    _description?:string;
    IsSelected?:boolean;






  constructor(name: string, duration: number, numberofparticipents: number, priceperperson: number, description: string)
   {
    this._name = name;
    this._duration = duration;
    this._numberofparticipents = numberofparticipents;
    this._price = priceperperson;
    this._description = description;
    this.IsSelected = false; 
   }


   toggleSelection(){
     if(this.IsSelected){
      this.IsSelected = false;}
      else if(this.IsSelected = false){
        this.IsSelected = true;
      }
        
   }


  ngOnInit() {

  }

}
