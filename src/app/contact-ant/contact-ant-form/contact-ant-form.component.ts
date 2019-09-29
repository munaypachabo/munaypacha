import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { AntService } from '../ant.service';
import { Ant } from '../../shared/models/ant.model';

@Component({
  selector: 'pacha-contact-ant-form',
  templateUrl: './contact-ant-form.component.html',
  styleUrls: ['./contact-ant-form.component.scss']
})
export class ContactAntFormComponent implements OnInit {
  antId: string;
  ant$: Observable<Ant>;
  name: string;
  address: string;
  trashType: string;
  trashQuantity: string;
  day: any;
  hour: any;
  cellphone: number;

  constructor(private route: ActivatedRoute, private antService: AntService) {}

  ngOnInit(): void {
    this.antId = this.route.snapshot.paramMap.get('id');
    this.ant$ = this.antService.getById(this.antId);
  }

  contactAnt(ant: Ant): void {
    const message = `Estimada Sr(a). ${ant.name}, mi nombre es ${this.name} vivo en la ${this.address}, tengo ${this.trashQuantity} aprox. de ${this.trashType}; quisiera que por favor pase a recoger este ${this.day} a las ${this.hour}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=591${ant.cellphone}&text=${message}`;
    window.open(whatsappLink, '_blank');
  }
}
