import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { CollectionCenterService } from '../collection-center.service';
import { CollectionCenter } from '../../shared/models/collection-center.model';

@Component({
  selector: 'pacha-center-profile',
  templateUrl: './center-profile.component.html',
  styleUrls: ['./center-profile.component.scss']
})
export class CenterProfileComponent implements OnInit {
  centerId: string;
  collectionCenter$: Observable<CollectionCenter>;

  constructor(
    private route: ActivatedRoute,
    private centerService: CollectionCenterService
  ) {}

  ngOnInit(): void {
    this.centerId = this.route.snapshot.paramMap.get('id');
    this.collectionCenter$ = this.centerService.getById(this.centerId);
  }
}
