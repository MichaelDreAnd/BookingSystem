import { Component, OnInit } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DBService } from 'src/app/db.service';


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  
  AllActivities: ActivitiesComponent[];
  SelectedActivities: ActivitiesComponent[];
  
  

  constructor(private data: DataService, private DB: DBService) {
   
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
    this.DB.GetActivities().subscribe(data => this.AllActivities = data);
    
  }

}
