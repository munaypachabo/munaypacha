import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CollectionCentersRoutingModule } from './collection-centers-routing.module';
import { CollectionCentersComponent } from './collection-centers.component';
import { CollectionCenterService } from './collection-center.service';
import { CentersMapComponent } from './centers-map/centers-map.component';
import { CenterProfileComponent } from './center-profile/center-profile.component';
import { MapModule } from '../shared/components/map/map.module';
import { SpinnerLoaderModule } from '../shared/components/spinner-loader/spinner-loader.module';

@NgModule({
  declarations: [
    CollectionCentersComponent,
    CentersMapComponent,
    CenterProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollectionCentersRoutingModule,
    MapModule,
    SpinnerLoaderModule
  ],
  providers: [CollectionCenterService]
})
export class CollectionCentersModule {}
