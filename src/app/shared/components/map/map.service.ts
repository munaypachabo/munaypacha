import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class MapService {
  constructor(private http: HttpClient) {}

  getStyles(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/map-style.json');
  }
}
