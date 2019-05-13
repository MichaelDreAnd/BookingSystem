import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { ActivitiesComponent } from './booking/activities/activities.component';
import { Person } from './booking/contactinfo-item/person';

@Injectable() 
export class DataService{
  constructor(){}

    private numberOfPeopleSource = new BehaviorSubject<number>(0);
    currentnumberOfPeople = this.numberOfPeopleSource.asObservable();


    private FoodBooleanSource = new BehaviorSubject<boolean>(false);
    currentFoodBoolean = this.FoodBooleanSource.asObservable();


    private ActivitiesSource = new BehaviorSubject<ActivitiesComponent[]>([new ActivitiesComponent("",0,0,0,"")])
    currentActivities = this.ActivitiesSource.asObservable();

    private PersonSource = new BehaviorSubject<Person>(new Person("","","","","","",""))
    currentPerson = this.PersonSource.asObservable();


    changeNumberOfPeople(numberOfPeople: number) {
      this.numberOfPeopleSource.next(numberOfPeople)}
    changeFood(changedFood: boolean){
      this.FoodBooleanSource.next(changedFood)}
    changeActivities(activities:ActivitiesComponent[]){
      this.ActivitiesSource.next(activities)}
    changePerson(Person:Person){
      this.PersonSource.next(Person);
    }




    
    
    


    }
