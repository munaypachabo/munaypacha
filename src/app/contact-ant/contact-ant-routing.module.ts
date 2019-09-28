import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactAntFormComponent } from './contact-ant-form/contact-ant-form.component';


const routes: Routes = [
  {
    path: '',
    component: ContactAntFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactAntRoutingModule { }
