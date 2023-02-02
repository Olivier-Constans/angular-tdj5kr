import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Coloc } from '../datas/coloc';
import { CrudApiService } from './crud-api.service';

@Injectable({ providedIn: 'root' })
export class ColocService extends CrudApiService<Coloc> {
  constructor(http: HttpClient) {
    super('api/colocs', http);
  }
}
