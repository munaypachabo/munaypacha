import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

import { Geolocation } from '../../models/geolocation.model';

declare const google: any;

@Component({
  selector: 'pacha-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = -17.393695;
  lng = -66.157126;
  zoom = 17;
  @Input()
  locations: Observable<Geolocation[]>;
  private map: any;
  @ViewChild('locationElement', { static: false })
  private locationControlElement: ElementRef;

  ngOnInit(): void {
    this.centerMapOnCurrentUserLocation();
  }

  centerMapOnCurrentUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.map.setCenter({ lat: this.lat, lng: this.lng });
      });
    }
  }

  addLocationElement(event: any): void {
    this.map = event;

    this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
      this.locationControlElement.nativeElement
    );
    this.centerMapOnCurrentUserLocation();
  }
}
