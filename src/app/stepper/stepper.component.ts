import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OfferService } from '../offers/offer.service';
import { OfferItem } from '../offers/offer-item';



/**
 * @title Stepper vertical

 **/



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
  eighthFormGroup: FormGroup;
  offers: OfferItem[];


  constructor(private formBuilder: FormBuilder, private offerService: OfferService) {}

  ngOnInit() {
     
    this.offers = this.offerService.getOffers();


    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
  });
    this.eighthFormGroup = this.formBuilder.group({
      eighthCtrl: ['', Validators.required]
      });
}}


