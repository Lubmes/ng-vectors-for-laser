import { Injectable } from '@angular/core';

import { Vector } from './vector';
import { VECTORS } from './mock-vectors';

@Injectable()
export class VectorService {
  getVectors() {
    return Promise.resolve(VECTORS);
  }
}