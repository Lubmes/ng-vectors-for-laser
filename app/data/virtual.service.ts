import { Injectable } from '@angular/core';

import { Virtual } from './virtual';
import { VIRTUALS } from './mock-virtuals';

@Injectable()
export class VirtualService {
  getVirtuals() {
    return Promise.resolve(VIRTUALS);
  }
}