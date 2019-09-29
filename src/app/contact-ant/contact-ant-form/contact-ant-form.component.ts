import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { AntService } from '../ant.service';
import { Ant } from '../../shared/models/ant.model';
import { MapService } from '../../shared/components/map/map.service';

declare const google: any;

const COCHA_LAT = -17.393695;
const COCHA_LNG = -66.157126;
const EMPTY = '_______';

@Component({
  selector: 'pacha-contact-ant-form',
  templateUrl: './contact-ant-form.component.html',
  styleUrls: ['./contact-ant-form.component.scss']
})
export class ContactAntFormComponent implements OnInit {
  lat = COCHA_LAT;
  lng = COCHA_LNG;
  currentUserLat = COCHA_LAT;
  currentUserLng = COCHA_LNG;
  zoom = 15;
  styles: any[];
  private map: any;
  @ViewChild('locationElement', { static: false })
  private locationControlElement: ElementRef;

  antId: string;
  ant$: Observable<Ant>;
  name: string;
  address: string;
  trashType: string;
  trashQuantity: string;
  day: any;
  hour: any;

  constructor(
    private route: ActivatedRoute,
    private antService: AntService,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.antId = this.route.snapshot.paramMap.get('id');
    this.ant$ = this.antService.getById(this.antId);

    this.mapService.getStyles().subscribe(styles => (this.styles = styles));
  }

  centerMapOnCurrentUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.currentUserLat = position.coords.latitude;
          this.currentUserLng = position.coords.longitude;

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

  setUserLocation(location: any): void {
    this.currentUserLat = location.coords.lat;
    this.currentUserLng = location.coords.lng;
  }

  setDay(date: Date): void {
    this.day = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  setHour(hour: any): void {
    this.hour = `${hour.time} ${hour.amOrPm}`;
  }

  contactAnt(ant: Ant): void {
    const location = `
      https://www.google.com/maps/search/?api%3D1%26query%3D
      ${this.currentUserLat}%2C
      ${this.currentUserLng}
      %26zoom%3D20`;
    const message = `Estimado(a) Sr(a). ${ant.name}, mi nombre es ${
      this.name
    }. Tengo ${this.trashQuantity ? this.trashQuantity : EMPTY} aprox. de ${
      this.trashType ? this.trashType : EMPTY
    }. Quisiera saber si lo(a) puede pasar a recoger este ${
      this.day ? this.day : EMPTY
    } a las ${
      this.hour ? this.hour : EMPTY
    }. Mi dirección es la siguiente: ${location.replace(
      /\s/g,
      ''
    )}. Algunas referencias del lugar: ${
      this.address ? this.address : EMPTY
    }. Se lo agradezco mucho de antemano.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=591${ant.cellphone}&text=${message}`;

    window.open(whatsappLink, '_blank');
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
