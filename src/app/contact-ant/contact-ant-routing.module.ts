import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactAntFormComponent } from './contact-ant-form/contact-ant-form.component';
import { AntProfileComponent } from './ant-profile/ant-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formulario'
  },
  {
    path: 'formulario',
    component: ContactAntFormComponent
  },
  {
    path: 'perfil',
    component: AntProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactAntRoutingModule {}
