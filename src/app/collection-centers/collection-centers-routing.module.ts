import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionCentersComponent } from './collection-centers.component';
import { CentersMapComponent } from './centers-map/centers-map.component';
import { CenterProfileComponent } from './center-profile/center-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionCentersComponent
  },
  {
    path: 'mapa',
    component: CentersMapComponent
  },
  {
    path: 'perfil',
    component: CenterProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionCentersRoutingModule {}
