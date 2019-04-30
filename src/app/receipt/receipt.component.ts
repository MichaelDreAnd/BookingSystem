import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit 
{

 public numberOfPeople;
 public SelectFood;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentnumberOfPeople.subscribe(numberOfPeople => this.numberOfPeople = numberOfPeople);
    this.data.currentFoodBoolean.subscribe(SelectFood => this.SelectFood = SelectFood)
  }

  }

