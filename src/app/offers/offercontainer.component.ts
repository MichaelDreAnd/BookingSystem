import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, EventEmitter, SimpleChange } from '@angular/core';

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
@Input()  index: number=0;
@Input() offers: OfferItem[];






@ViewChild(OfferDirective) offerhost: OfferDirective;
constructor(private componentFactoryResolver: ComponentFactoryResolver){}

ngOnChanges(changes: SimpleChange){
this.index = changes.currentValue;
this.loadComponent();
}



ngOnInit() {
this.loadComponent();
}


loadComponent(){

    let OfferItem = this.offers[this.index];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(OfferItem.component);
    let viewContainerRef = this.offerhost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as OfferComponent) = OfferItem;
}

}
