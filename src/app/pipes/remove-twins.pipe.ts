import { Pipe, PipeTransform } from '@angular/core';
import { Compat } from '../compat';

@Pipe({
  name: 'removeTwins'
})
export class RemoveTwinsPipe implements PipeTransform {

  transform(value: Compat[]): Compat[] {
    let results: Compat[] = value;

    for (let i=0; i<results.length; i++) {
      for (let j=0; j<results.length; j++) {
        if (i != j && results[j].name == results[i].name) {
          results.splice(j, 1);
        }
      }
    }
    return results;
  }

}
