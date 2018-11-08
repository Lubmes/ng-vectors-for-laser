import { Injectable } from '@angular/core';

import { Cover } from './cover';
import { COVERS } from './mock-covers';


@Injectable()
export class CoverService {
  getCovers() {
    return Promise.resolve(COVERS);
  }
  
  getCover(id: number) {
    return Promise.resolve(COVERS).then(
      covers => covers.filter(cover => cover.id === id)[0]
    );
  }
}