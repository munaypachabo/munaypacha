import { Directive, ElementRef, OnInit } from '@angular/core';

import { Timepicker } from 'materialize-css';

@Directive({
  selector: '[pachaTimepicker]'
})
export class TimepickerDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Timepicker.init(this.elementRef.nativeElement);
  }
}
