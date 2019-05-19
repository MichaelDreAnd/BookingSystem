import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-selectoffer',
  templateUrl: './selectoffer.component.html',
  styleUrls: ['./selectoffer.component.css']
})
export class SelectofferComponent {
  @Output() index: number;

  constructor() {}

  @Output() Clicked = new EventEmitter<number>();

  clickedbtn(id: number){

    this.Clicked.emit(id);

    

  }

}
