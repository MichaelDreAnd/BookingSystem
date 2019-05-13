import { Component, OnInit } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  NAME: string ="Fun dag"
  INCLUDEDACTIVITIES ?:ActivitiesComponent[]
  ISSELECTED ?:boolean;
  NUMBEROFPARTICIPANTS:number;
  DESCRIPTION:string ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



 /*   constructor(name: string, includedactivities?: ActivitiesComponent[], isselected?: boolean, numberofparticipants?: number, description?: string) {
    this.NAME = name;
    this.INCLUDEDACTIVITIES = includedactivities;
    this.ISSELECTED = isselected;
    this.NUMBEROFPARTICIPANTS = numberofparticipants;
    this.DESCRIPTION = description;
  }  */

  ngOnInit() {
  }

}
