import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-custompackageselection',
  templateUrl: './custompackageselection.component.html',
  styleUrls: ['./custompackageselection.component.css']
})
export class CustompackageselectionComponent implements OnInit {
  @Input() customhandler: Function;
  
  createcustomcomponent1(){}
  isLinear = false;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forthFormGroup = this.formBuilder.group({
      forthCtrl: ['', Validators.required]
      });
        this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
      });
        this.sixthFormGroup = this.formBuilder.group({
        sixthCtrl: ['', Validators.required]
      });
        this.seventhFormGroup = this.formBuilder.group({
        seventhCtrl: ['', Validators.required]
        });
  }

  

}
