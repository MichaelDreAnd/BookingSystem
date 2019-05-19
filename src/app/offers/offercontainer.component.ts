import { Component, Input, OnInit, ViewChild, OnChanges, ComponentFactoryResolver, OnDestroy, EventEmitter, SimpleChange } from '@angular/core';

import { OfferDirective } from './offer.directive';

import { OfferItem } from './offer-item';

import {OfferComponent} from './offer.component';

@Component({
    selector:'OfferContainer',
    template:`
    <ng-template appOffer></ng-template>
    `,
})

export class OfferContainerComponent{
@Input()  index: number;
@Input() offers: OfferItem[];
//@Input() changes:SimpleChange;





@ViewChild(OfferDirective) offerhost: OfferDirective;
constructor(private componentFactoryResolver: ComponentFactoryResolver)
{ 
    
}







ngOnChanges(){
    console.log("index=" + this.index);
    this.loadComponent(this.index);
}

loadComponent(index:number){
    let OfferItem = this.offers[this.index];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(OfferItem.component);
    let viewContainerRef = this.offerhost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as OfferComponent) = OfferItem;
}

}
