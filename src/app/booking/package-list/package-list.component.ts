import { Component, OnInit } from '@angular/core';
import { PackageComponent } from '../package/package.component';
import { DBService } from 'src/app/db.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  PackageList: PackageComponent[];


    constructor(private DB: DBService) { }

  ngOnInit() 
  {
    this.DB.GetPackages().subscribe(data => this.PackageList = data);
  }

}
