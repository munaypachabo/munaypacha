import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googlemaps
    })
  ],
  exports: [MapComponent]
})
export class MapModule {}
