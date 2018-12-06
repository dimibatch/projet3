import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'resultat'
})
export class ResultatPipe implements PipeTransform {

  transform(value: Test, param_resultat?: string): Test {
    const result: Test[] = [];
    if (param_resultat === undefined || param_resultat === '') {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].ResultatPipe.toLowerCase() === param_resultat.toLowerCase()) {
          result.push(value[i]);
        }
      }
      return result;
   }
  }
}


