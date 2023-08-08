import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSearchBorder]',
})
export class SearchBorderDirective {
  @Input('appSearchBorder') value!: string;

  constructor(private element: ElementRef) {}

  @HostListener('keyup') onKeyUp() {
    if (this.value === '' || this.value.match(/\s+/g)) {
      this.highlight('red');
    } else {
      this.highlight('green');
    }
  }
  private highlight(color: string) {
    this.element.nativeElement.style.borderColor = color;
    this.element.nativeElement.style.borderStyle = 'solid';
    this.element.nativeElement.style.borderWidth = '4px';
  }
}
