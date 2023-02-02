import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Coloc } from '../datas/coloc';
import { COLOCS } from '../mocks/mock-colocs';
import { ROOMS } from '../mocks/mock-rooms';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const colocs = COLOCS;
    const rooms = ROOMS;

    return { colocs, rooms };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(colocs: Coloc[]): number {
    return colocs.length > 0
      ? Math.max(...colocs.map((coloc) => coloc.id)) + 1
      : 11;
  }
}
