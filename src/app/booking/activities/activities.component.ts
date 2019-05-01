import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
    NAME: string;
    DURATION?:number;
    NUMBEROFPARTICIPENTS?:number;
    PRICEPERPERSON?:number;
    DESCRIPTION?:string;
    IsSelected:boolean;






  constructor(name: string, duration: number, numberofparticipents: number, priceperperson: number, description: string)
   {
    this.NAME = name;
    this.DURATION = duration;
    this.NUMBEROFPARTICIPENTS = numberofparticipents;
    this.PRICEPERPERSON = priceperperson;
    this.DESCRIPTION = description;
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
