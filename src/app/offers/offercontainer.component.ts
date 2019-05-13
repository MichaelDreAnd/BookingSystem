import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { OfferDirective } from './offer.directive';

import { OfferItem } from './offer-item';

import {OfferComponent} from './offer.component';

@Component({
    selector:'OfferContainer',
    template:`
    <ng-template appOffer></ng-template>
    `,

})

export class OfferContainerComponent implements OnInit {
@Input() offers: OfferItem[];

@ViewChild(OfferDirective) offerhost: OfferDirective;

constructor(private componentFactoryResolver: ComponentFactoryResolver){}

ngOnInit(){
this.loadComponent();
}


loadComponent(){
    let OfferItem = this.offers[0];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(OfferItem.component);
    let viewContainerRef = this.offerhost.viewContainerRef;
    viewContainerRef.clear();
   
    
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as OfferComponent) = OfferItem;


}

}
