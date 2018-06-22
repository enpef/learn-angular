import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighLightDirective {
    constructor(el: ElementRef , renderer: Renderer){
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
    }
}