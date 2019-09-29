import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { MapService } from './map.service';
import { environment } from '../../../../environments/environment';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googlemaps
    }),
    HttpClientModule
  ],
  exports: [MapComponent],
  providers: [MapService]
})
export class MapModule {}
