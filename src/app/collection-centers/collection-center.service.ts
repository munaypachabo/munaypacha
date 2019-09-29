import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { CollectionCenter } from '../shared/models/collection-center.model';

@Injectable()
export class CollectionCenterService {
  private centersCollection: AngularFirestoreCollection<CollectionCenter>;

  constructor(private db: AngularFirestore) {
    this.centersCollection = this.db.collection<CollectionCenter>(
      'collection-centers'
    );
  }

  getAll(): Observable<CollectionCenter[]> {
    return this.centersCollection.valueChanges();
  }

  getById(id: string): Observable<CollectionCenter> {
    return this.db
      .doc<CollectionCenter>(`collection-centers/${id}`)
      .valueChanges();
  }
}
