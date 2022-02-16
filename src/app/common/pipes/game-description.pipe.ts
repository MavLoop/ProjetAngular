import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameDescription'
})
export class GameDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
