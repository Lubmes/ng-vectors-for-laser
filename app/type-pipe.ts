// Angular 2
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe{
  transform(value: any, type: string) {
    return value.filter(
      (item: any)=> item.type === type);
    }
}