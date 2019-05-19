import {Component, OnInit, Input,Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OfferService } from '../offers/offer.service';
import { OfferItem } from '../offers/offer-item';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';



/**
 * @title Stepper vertical

 **/



@Component({
  selector: 'app-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css']
})
export class StepperComponent implements OnInit {
  index: number ;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  eighthFormGroup: FormGroup;

  offers: OfferItem[];
  constructor(private formBuilder: FormBuilder, private offerService: OfferService) {}

onClicked(id: number)
{
 this.index = id;
 console.log(this.index);
}




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


