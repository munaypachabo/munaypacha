import { Component, OnInit } from '@angular/core';

import { CollectionCenter } from 'src/app/shared/models/collection-center.model';

@Component({
  selector: 'pacha-center-profile',
  templateUrl: './center-profile.component.html',
  styleUrls: ['./center-profile.component.scss']
})
export class CenterProfileComponent implements OnInit {
  collectionCenter: CollectionCenter;

  constructor() {}

  ngOnInit() {
    this.collectionCenter = {
      id: '123',
      name: 'Barrientos',
      phone: '4542802',
      pic:
        'https://wastechcostarica.files.wordpress.com/2014/08/centros-de-acopio-de-residuos.jpg',
      cellphone: '75997855',
      position: {
        lat: '',
        lng: ''
      }
    };
  }
}
