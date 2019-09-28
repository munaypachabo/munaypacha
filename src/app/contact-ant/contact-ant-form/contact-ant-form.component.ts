import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  contactAnt(): void {
    console.log(this.name, this.address, this.trashType, this.trashQuantity, this.day, this.hour, this.cellphone);
  }

}
