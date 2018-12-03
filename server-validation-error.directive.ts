import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appServerValidationError]'
})
export class ServerValidationErrorDirective implements OnInit {

  @Input() errors: any;
  @Input() label: string;
  element: ElementRef;
  constructor(private el: ElementRef) {
    this.element = el;
  }

  ngOnInit() {
    this.element.nativeElement.innerHTML = ' ';
    if (this.errors !== null && Object.keys(this.errors).length > 0 && this.errors.hasOwnProperty(this.label)) {
      this.element.nativeElement.innerHTML =
        this.errors[this.label][0].replace(/([\.][\d{1}][\.])/g, ' ').replace(/_/g, ' ');
      this.element.nativeElement.style.fontSize = '90%';
    }
  }
}
