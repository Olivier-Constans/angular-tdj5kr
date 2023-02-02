import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Coloc } from '../datas/coloc';

@Injectable({ providedIn: 'root' })
export class ColocService {
  private url = 'api/colocs'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getColocs(): Observable<Coloc[]> {
    return this.http
      .get<Coloc[]>(this.url)
      .pipe(tap((_) => console.log('fetched coloc')));
  }
}
