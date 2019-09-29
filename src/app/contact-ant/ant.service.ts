import { Injectable } from '@angular/core';

import { Ant } from '../shared/models/ant.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AntService {
  private antsCollection: AngularFirestoreCollection<Ant>;

  constructor(private db: AngularFirestore) {
    this.antsCollection = this.db.collection<Ant>('ants');
  }

  getAll(): Observable<Ant[]> {
    return this.antsCollection.valueChanges();
  }

  getById(id: string): Observable<Ant> {
    return this.db.doc<Ant>(`ants/${id}`).valueChanges();
  }
}
