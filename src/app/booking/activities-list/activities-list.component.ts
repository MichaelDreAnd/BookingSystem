import { Component, OnInit } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  activityA : ActivitiesComponent = new ActivitiesComponent("Crazy Gokart",0,0,123,"Du kører i gokart")
  activityB : ActivitiesComponent = new ActivitiesComponent("HUNT",0,0,240,"Shoot the birds!")
  AllActivities: ActivitiesComponent[];
  SelectedActivities: ActivitiesComponent[];


  constructor(private data: DataService) {
  this.AllActivities = [this.activityA, this.activityB];
  }

 


  submit()
  {
  const temparr = []
  this.AllActivities.forEach(function(element)
  {
    if(element.IsSelected === true)
    {
      temparr.push(element)
    }

  })
  this.SelectedActivities = [...temparr]
  this.data.changeActivities(this.SelectedActivities)
  
  }

  ngOnInit() {
    this.data.currentActivities.subscribe( SelectedActivities => this.SelectedActivities = SelectedActivities);
  }

}
