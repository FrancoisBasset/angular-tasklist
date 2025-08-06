import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[green]'
})
export default class GreenDirective {
  private el = inject(ElementRef);

  private setStyle(color: string, backgroundColor: string, borderColor: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.border = '3px solid ' + borderColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle('red', 'pink', 'red');
  }

  @HostListener('mouseleave') onMouseExit() {
    this.setStyle('green', 'lightgreen', 'green');
  }

  constructor() {
    this.el.nativeElement.style = 'width: fit-content; padding: 10px; border-radius: 10px; cursor: pointer';
    this.setStyle('green', 'lightgreen', 'green');
  }
}
