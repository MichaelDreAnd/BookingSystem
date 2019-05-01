import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { ActivitiesComponent } from './booking/activities/activities.component';

@Injectable() 
export class DataService{
  constructor(){}

    private numberOfPeopleSource = new BehaviorSubject<number>(0);
    currentnumberOfPeople = this.numberOfPeopleSource.asObservable();
    changeNumberOfPeople(numberOfPeople: number) {
      this.numberOfPeopleSource.next(numberOfPeople)}

    
    private FoodBooleanSource = new BehaviorSubject<boolean>(false);
    currentFoodBoolean = this.FoodBooleanSource.asObservable();
    changeFood(changedFood: boolean){
      this.FoodBooleanSource.next(changedFood)}


    private ActivitiesSource = new BehaviorSubject<ActivitiesComponent[]>([new ActivitiesComponent("",0,0,0,"")])
    currentActivities = this.ActivitiesSource.asObservable();
    changeActivities(activities:ActivitiesComponent[]){
      this.ActivitiesSource.next(activities)
    //  console.log(activities) 
    }


    
    
    


    }
