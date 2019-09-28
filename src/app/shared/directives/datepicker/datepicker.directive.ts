import { Directive, ElementRef, OnInit } from '@angular/core';

import { Datepicker } from 'materialize-css';

@Directive({
  selector: '[pachaDatepicker]'
})
export class DatepickerDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Datepicker.init(this.elementRef.nativeElement);
  }
}
