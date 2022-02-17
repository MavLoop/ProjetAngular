import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameDescription'
})
export class GameDescriptionPipe implements PipeTransform {

  transform(value: string, num: number): unknown {
    if(value.length > num) {
      value = value.slice(0, num) + '...';
    }
    return value;
  }
}
