import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOffer]',
})
export class OfferDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
