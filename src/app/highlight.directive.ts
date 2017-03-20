import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor = this.defaultColor;

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseenter', ['$event']) mouseOver(event: Event) {
    this.backgroundColor = this.highlightColor;
    console.log('Event Target' + event.target);
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
