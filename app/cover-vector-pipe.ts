// Angular 2
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cover'
})
export class CoverVectorPipe{
  transform(value: any, cover: any) {
    return value.filter(
      (item: any)=> item.aim_id === cover.id);
    }
}