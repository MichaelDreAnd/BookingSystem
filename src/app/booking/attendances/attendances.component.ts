import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.css']
})
export class AttendancesComponent{
 public numberOfPeople: number;




  constructor(private data: DataService) {}

  ngOnInit(){
    this.data.currentnumberOfPeople.subscribe(numberOfPeople => this.numberOfPeople = numberOfPeople);
  }

  newMessage(){
    
    this.data.changeNumberOfPeople(this.numberOfPeople)
  }

}
