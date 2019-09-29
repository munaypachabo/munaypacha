import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientInfo } from 'src/app/shared/models/client-info.model';

@Component({
  selector: 'pacha-contact-ant-form',
  templateUrl: './contact-ant-form.component.html',
  styleUrls: ['./contact-ant-form.component.scss']
})
export class ContactAntFormComponent implements OnInit {
  name: string;
  address: string;
  trashType: string;
  trashQuantity: string;
  day: any;
  hour: any;
  cellphone: number;
  message: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  contactAnt(): void {
    console.log(this.name, this.address, this.trashType, this.trashQuantity, this.day, this.hour, this.cellphone);
    this.message = 'https://api.whatsapp.com/send?phone=59175997855&text=Buenas noches señora, por favor hubiquenos en esta dirección http://maps.google.com/?ll=-17.3989886,-66.144346';
  }

}
