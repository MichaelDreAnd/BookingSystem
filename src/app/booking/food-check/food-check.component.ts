import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-food-check',
  templateUrl: './food-check.component.html',
  styleUrls: ['./food-check.component.css']
})
export class FoodCheckComponent implements OnInit {

  Food: boolean;



  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentFoodBoolean.subscribe(Food => this.Food = Food);
  }

  newMessage(){
    this.data.changeFood(this.Food);
  }

}
