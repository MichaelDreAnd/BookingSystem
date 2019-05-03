import { Component, OnInit } from '@angular/core';
import {Person} from './person';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-contactinfo-item',
  templateUrl: './contactinfo-item.component.html',
  styleUrls: ['./contactinfo-item.component.css']
})
export class ContactinfoItemComponent implements OnInit {

  person: Person;


  constructor(private data: DataService) {}

  ngOnInit()
  {
   this.data.currentPerson.subscribe(person => this.person = person);
  }

  newPerson(){
    this.data.changePerson(this.person);
  }


}
