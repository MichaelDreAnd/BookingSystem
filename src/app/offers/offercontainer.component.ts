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






@ViewChild(OfferDirective) offerhost: OfferDirective;
constructor(private componentFactoryResolver: ComponentFactoryResolver)
{
this.index = 0;
}







ngOnChanges(changes: SimpleChange){
    console.log("index=" + this.index);
    if(this.index === undefined)
    {
        console.log("isfirstchange");
        this.index = 0;
    }
    else{
        console.log("OnChanges" + changes.currentValue);
        changes.
        this.index = changes.currentValue;
    }
    this.loadComponent();
}

loadComponent(){
    console.log("LoadComponent" + this.index);
    let OfferItem = this.offers[this.index];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(OfferItem.component);
    let viewContainerRef = this.offerhost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as OfferComponent) = OfferItem;
}

}
