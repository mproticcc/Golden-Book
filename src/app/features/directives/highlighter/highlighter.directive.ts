import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective implements OnInit {
  @Input('appHighlighter') category!: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    switch (this.category) {
      case 'General':
        this.highlightBackground('#f6edd7');
        this.highlightText('black');
        break;
      case 'History':
        this.highlightBackground('white');
        this.highlightText('black');
        break;
      case 'Fantasy':
        this.highlightBackground('pink');
        this.highlightText('white');
        break;
      case 'Literary':
        this.highlightBackground('green');
        this.highlightText('yellow');
        break;
    }
  }

  private highlightBackground(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  private highlightText(color: string) {
    this.element.nativeElement.style.color = color;
  }
}
