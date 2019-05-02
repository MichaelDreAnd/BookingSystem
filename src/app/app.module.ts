import { BrowserModule , } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { StepperComponent } from './stepper/stepper.component';
import { DateComponent } from './booking/date/date.component';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { TimeComponent } from './booking/time/time.component';
import { MatButtonModule } from '@angular/material/button';
import { AttendancesComponent } from './booking/attendances/attendances.component';
import { ActivitiesComponent } from './booking/activities/activities.component';
import { ActivitiesListComponent } from './booking/activities-list/activities-list.component';
import { PackageListComponent } from './booking/package-list/package-list.component';
import { PackageComponent } from './booking/package/package.component';
import { FoodCheckComponent } from './booking/food-check/food-check.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { ReceiptComponent } from './receipt/receipt.component';
import { DataService } from './data.service';
import { ContactinfoItemComponent } from './contactinfo-item/contactinfo-item.component';







@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    DateComponent,
    TimeComponent,
    AttendancesComponent,
    ActivitiesComponent,
    ActivitiesListComponent,
    PackageListComponent,
    PackageComponent,
    FoodCheckComponent,
    ReceiptComponent,
    ContactinfoItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatStepperModule, MatFormFieldModule, MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
