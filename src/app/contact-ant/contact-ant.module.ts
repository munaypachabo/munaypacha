import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactAntRoutingModule } from './contact-ant-routing.module';
import { ContactAntFormComponent } from './contact-ant-form/contact-ant-form.component';
import { SelectModule } from '../shared/directives/select/select.module';
import { DatepickerModule } from '../shared/directives/datepicker/datepicker.module';
import { TimepickerModule } from '../shared/directives/timepicker/timepicker.module';
import { AntProfileComponent } from './ant-profile/ant-profile.component';


@NgModule({
  declarations: [ContactAntFormComponent, AntProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactAntRoutingModule,
    SelectModule,
    DatepickerModule,
    TimepickerModule
  ]
})
export class ContactAntModule { }
