import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[imageBorder]',
})
export class ImageBorderDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.border = '2px solid black';
    element.nativeElement.style.padding = '10px';
    element.nativeElement.style.borderRadius = '50px';
  }
}
