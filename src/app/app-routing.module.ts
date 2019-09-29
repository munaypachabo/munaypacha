import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'centros-de-acopio',
    loadChildren: () =>
      import('./collection-centers/collection-centers.module').then(
        m => m.CollectionCentersModule
      )
  },
  {
    path: 'contactar-hormiga',
    loadChildren: () =>
      import('./contact-ant/contact-ant.module').then(
        module => module.ContactAntModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
