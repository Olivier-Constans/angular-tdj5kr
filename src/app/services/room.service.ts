import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Room } from '../datas/room';
import { CrudApiService } from './crud-api.service';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private crudDelegator;

  constructor(private http: HttpClient) {
    this.crudDelegator = new CrudApiService<Room>('api/rooms', this.http);
  }

  get(): Observable<Room[]> {
    return this.crudDelegator.get();
  }
}
