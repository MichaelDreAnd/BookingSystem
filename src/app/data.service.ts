import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable() 
export class DataService{
  constructor(){}

    private numberOfPeopleSource = new BehaviorSubject<number>(0);
    currentnumberOfPeople = this.numberOfPeopleSource.asObservable();

    private FoodBooleanSource = new BehaviorSubject<boolean>(false);
    currentFoodBoolean = this.FoodBooleanSource.asObservable();


    

    changeNumberOfPeople(numberOfPeople: number) {
    this.numberOfPeopleSource.next(numberOfPeople)
    }
    
    changeFood(changedFood: boolean){
      this.FoodBooleanSource.next(changedFood)
    }


    }
