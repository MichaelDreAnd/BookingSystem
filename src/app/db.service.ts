import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivitiesComponent } from './booking/activities/activities.component';
import { Observable } from 'rxjs';
import { PackageComponent } from './booking/package/package.component';


@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private http: HttpClient) { }

  GetActivities(): Observable<ActivitiesComponent[]>{
    return this.http.get<ActivitiesComponent[]>('http://localhost:3000/')
  }

  GetPackages(): Observable<PackageComponent[]>{
    return this.http.get<PackageComponent[]>('http://localhost:3000/packages')
  }


}
