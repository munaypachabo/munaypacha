import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionCentersRoutingModule } from './collection-centers-routing.module';
import { CollectionCentersComponent } from './collection-centers.component';
import { CollectionCenterService } from './collection-center.service';

@NgModule({
  declarations: [CollectionCentersComponent],
  imports: [CommonModule, CollectionCentersRoutingModule],
  providers: [CollectionCenterService]
})
export class CollectionCentersModule {}
