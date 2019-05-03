import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivitiesComponent } from '../booking/activities/activities.component';
import { Person } from '../contactinfo-item/person';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit 
{

 public numberOfPeople;
 public SelectFood;
 public SelectedActivities: ActivitiesComponent[];
 public person: Person;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentnumberOfPeople.subscribe(numberOfPeople => this.numberOfPeople = numberOfPeople);
    this.data.currentFoodBoolean.subscribe(SelectFood => this.SelectFood = SelectFood);
    this.data.currentActivities.subscribe(SelectedActivities => this.SelectedActivities = SelectedActivities);
    this.data.currentPerson.subscribe(person => this.person = person);
  }

  }


