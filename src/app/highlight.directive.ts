import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  elem: any;

  constructor() {
    this.elem.nativeElement.style.backgroundColor="rgba(0, 0, 255,0.47)";
    
   }

}
