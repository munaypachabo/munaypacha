import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { Datepicker } from 'materialize-css';

@Directive({
  selector: '[pachaDatepicker]',
  exportAs: 'datepickerDirective'
})
export class DatepickerDirective implements OnInit {
  datepickerInstance: Datepicker;
  @Output() private datepickerClose = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      i18n: {
        cancel: 'Cancelar',
        clear: 'Limpiar',
        done: 'Ok',
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ],
        weekdays: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado'
        ],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        weekdaysAbbrev: ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S']
      },
      onClose: () => this.datepickerClose.emit()
    };

    this.datepickerInstance = Datepicker.init(
      this.elementRef.nativeElement,
      options
    );
  }
}
