import { Injectable } from '@angular/core';
import { CustompackageselectionComponent } from '../booking/custompackageselection/custompackageselection.component';
import { OfferItem } from './offer-item';
import { PredeterminedpackageselectedtionComponent } from '../booking/predeterminedpackageselectedtion/predeterminedpackageselectedtion.component';

@Injectable()
export class OfferService{
    getOffers(){
        return[
            new OfferItem(CustompackageselectionComponent),
            new OfferItem(PredeterminedpackageselectedtionComponent)
                ];
    }
}