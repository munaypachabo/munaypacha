import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CollectionCenterService } from './collection-center.service';
import { CollectionCenter } from '../shared/models/collection-center.model';

@Component({
  selector: 'pacha-collection-centers',
  templateUrl: './collection-centers.component.html',
  styleUrls: ['./collection-centers.component.scss']
})
export class CollectionCentersComponent implements OnInit {
  collectionCenters$: Observable<CollectionCenter[]>;

  constructor(private centerService: CollectionCenterService) {}

  ngOnInit(): void {
    this.collectionCenters$ = this.centerService.getAll();
  }
}
