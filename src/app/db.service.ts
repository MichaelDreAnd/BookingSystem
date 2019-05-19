import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivitiesComponent } from './booking/activities/activities.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private http: HttpClient) { }

  GetActivities(): Observable<ActivitiesComponent[]>{
    return this.http.get<ActivitiesComponent[]>('http://localhost:3000/')
  }

}
