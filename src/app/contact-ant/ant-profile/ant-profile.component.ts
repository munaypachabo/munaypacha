import { Component, OnInit } from '@angular/core';

import { ClientInfo } from 'src/app/shared/models/client-info.model';

@Component({
  selector: 'pacha-ant-profile',
  templateUrl: './ant-profile.component.html',
  styleUrls: ['./ant-profile.component.scss']
})
export class AntProfileComponent implements OnInit {
  antInfo: ClientInfo;
  whatsappText: string;
  constructor() {
    this.antInfo = JSON.parse(localStorage.getItem('userKey'));
  }

  ngOnInit() {
    let clientLocation = 'https://www.google.com/maps/search/?api=1&query=-17.3964364,-66.213541';
    this.whatsappText = `Buenas noches señora ${this.antInfo.name} en direccion ${clientLocation}`;
  }
}
