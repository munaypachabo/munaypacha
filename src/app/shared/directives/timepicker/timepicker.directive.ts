import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { Timepicker } from 'materialize-css';

@Directive({
  selector: '[pachaTimepicker]',
  exportAs: 'timepickerDirective'
})
export class TimepickerDirective implements OnInit {
  timepickerInstance: Timepicker;
  @Output() private timepickerClose = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      i18n: {
        cancel: 'Cancelar',
        clear: 'Limpiar',
        done: 'Ok'
      },
      onCloseEnd: () => this.timepickerClose.emit()
    };

    this.timepickerInstance = Timepicker.init(
      this.elementRef.nativeElement,
      options
    );
  }
}
