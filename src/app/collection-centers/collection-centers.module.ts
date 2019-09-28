import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionCentersRoutingModule } from './collection-centers-routing.module';
import { CollectionCentersComponent } from './collection-centers.component';
import { CollectionCenterService } from './collection-center.service';
import { CentersMapComponent } from './centers-map/centers-map.component';
import { MapModule } from '../shared/components/map/map.module';

@NgModule({
  declarations: [CollectionCentersComponent, CentersMapComponent],
  imports: [CommonModule, CollectionCentersRoutingModule, MapModule],
  providers: [CollectionCenterService]
})
export class CollectionCentersModule {}
