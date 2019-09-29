import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { CollectionCenterService } from '../collection-center.service';
import { CollectionCenter } from '../../shared/models/collection-center.model';

@Component({
  selector: 'pacha-centers-map',
  templateUrl: './centers-map.component.html',
  styleUrls: ['./centers-map.component.scss']
})
export class CentersMapComponent implements OnInit {
  collectionCenters$: Observable<CollectionCenter[]>;

  constructor(
    private router: Router,
    private centersService: CollectionCenterService
  ) {}

  ngOnInit(): void {
    this.collectionCenters$ = this.centersService.getAll();
  }

  seeCenterData(center: CollectionCenter): void {
    this.router.navigate(['/centros-de-acopio/perfil', center.id]);
  }
}
