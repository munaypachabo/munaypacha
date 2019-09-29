import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AntService } from '../ant.service';
import { Ant } from '../../shared/models/ant.model';

@Component({
  selector: 'pacha-ant-map',
  templateUrl: './ant-map.component.html',
  styleUrls: ['./ant-map.component.scss']
})
export class AntMapComponent implements OnInit {
  ants$: Observable<Ant[]>;
  defaultMapImage = 'assets/images/ant.png';
  defaultPinImage = 'assets/images/no-photo.png';

  constructor(private router: Router, private antService: AntService) {}

  ngOnInit(): void {
    this.ants$ = this.antService.getAll();
  }

  seeAntData(ant: Ant): void {
    this.router.navigate(['contactar-hormiga/perfil', ant.id]);
  }
}
