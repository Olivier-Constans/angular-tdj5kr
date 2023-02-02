import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Room } from '../datas/room';
import { CrudApiService } from './crud-api.service';

@Injectable({ providedIn: 'root' })
export class RoomService extends CrudApiService<Room> {
  constructor(http: HttpClient) {
    super('api/rooms', http);
  }
}
