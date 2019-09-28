import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimepickerDirective } from './timepicker.directive';

@NgModule({
  declarations: [TimepickerDirective],
  imports: [CommonModule],
  exports: [TimepickerDirective]
})
export class TimepickerModule {}
