import { Component, OnInit } from '@angular/core';

import { Ant } from '../../shared/models/ant.model';

@Component({
  selector: 'pacha-ant-profile',
  templateUrl: './ant-profile.component.html',
  styleUrls: ['./ant-profile.component.scss']
})
export class AntProfileComponent implements OnInit {
  ant: Ant;
  antCellphone: string;

  constructor() {}

  ngOnInit() {
    this.ant = {
      id: '123',
      name: 'Lupe Meneses',
      bio:
        'Doña Lupe trabaja de lunes a jueves recogiendo botellas para poder mantener a sus 3 hijitos de 2, 3 y 4 años.',
      pic:
        'http://2.bp.blogspot.com/_mK1SR8qvlwA/S4LSH1nGrDI/AAAAAAAAABw/g-LhCaPEGSw/s400/ni_a_quime_a2.jpg',
      cellphone: '75997855',
      phone: '4542804'
    };
    this.antCellphone = `tel:+591${this.ant.cellphone}`;
  }
}
