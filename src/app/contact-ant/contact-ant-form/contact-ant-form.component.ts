import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ant } from '../../shared/models/ant.model';

@Component({
  selector: 'pacha-contact-ant-form',
  templateUrl: './contact-ant-form.component.html',
  styleUrls: ['./contact-ant-form.component.scss']
})
export class ContactAntFormComponent implements OnInit {
  ant: Ant;
  name: string;
  address: string;
  trashType: string;
  trashQuantity: string;
  day: any;
  hour: any;
  cellphone: number;

  constructor(private router: Router) {}

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
  }

  contactAnt(): void {
    console.log(
      this.name,
      this.address,
      this.trashType,
      this.trashQuantity,
      this.day,
      this.hour,
      this.cellphone
    );
    const message = `Estimada Sr(a). ${this.ant.name}, mi nombre es ${this.name} vivo en la ${this.address}, tengo ${this.trashQuantity} aprox. de ${this.trashType}; quisiera que por favor pase a recoger este ${this.day} a las ${this.hour}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=591${this.ant.cellphone}&text=${message}`;
    window.location.href = whatsappLink;
  }
}
