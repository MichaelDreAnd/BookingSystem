import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'app-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
  });
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
    this.eighthFormGroup = this.formBuilder.group({
      eighthCtrl: ['', Validators.required]
      });
}}
