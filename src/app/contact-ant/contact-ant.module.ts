import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactAntRoutingModule } from './contact-ant-routing.module';
import { ContactAntFormComponent } from './contact-ant-form/contact-ant-form.component';


@NgModule({
  declarations: [ContactAntFormComponent],
  imports: [
    CommonModule,
    ContactAntRoutingModule
  ]
})
export class ContactAntModule { }
