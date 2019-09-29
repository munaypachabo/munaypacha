import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

import { MapService } from './map.service';
import { Contact } from '../../models/contact.model';

declare const google: any;

const COCHA_LAT = -17.393695;
const COCHA_LNG = -66.157126;

@Component({
  selector: 'pacha-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = COCHA_LAT;
  lng = COCHA_LNG;
  zoom = 15;
  styles: any[];
  @Input()
  items: Contact[] = [];
  @Input()
  defaultItemImage = 'assets/images/recycle.png';
  @Input()
  defaultPinImage = 'assets/images/centroAcopio.png';
  @Output()
  triggerItemAction = new EventEmitter<Contact>();
  private map: any;
  @ViewChild('locationElement', { static: false })
  private locationControlElement: ElementRef;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.getStyles().subscribe(styles => (this.styles = styles));
  }

  centerMapOnCurrentUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          this.map.setCenter({ lat: this.lat, lng: this.lng });
        },
        () => {
          this.handleLocationError(true);
        }
      );
    } else {
      this.handleLocationError(false);
    }
  }

  addLocationElement(event: any): void {
    this.map = event;

    this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
      this.locationControlElement.nativeElement
    );
    this.centerMapOnCurrentUserLocation();
  }

  private handleLocationError(browserHasGeolocation: boolean): void {
    this.lat = COCHA_LAT;
    this.lng = COCHA_LNG;
    const errorMessage = browserHasGeolocation
      ? 'Error: El servicio de Geolocalización falló.'
      : 'Error: Tu navegador no soporta Geolocalización.';

    this.map.setCenter({ lat: this.lat, lng: this.lng });
    console.error(errorMessage);
  }
}
