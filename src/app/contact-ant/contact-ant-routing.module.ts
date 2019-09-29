import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactAntFormComponent } from './contact-ant-form/contact-ant-form.component';
import { AntProfileComponent } from './ant-profile/ant-profile.component';
import { AntMapComponent } from './ant-map/ant-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mapa'
  },
  {
    path: 'mapa',
    component: AntMapComponent
  },
  {
    path: 'perfil/:id',
    component: AntProfileComponent
  },
  {
    path: 'formulario/:id',
    component: ContactAntFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactAntRoutingModule {}
