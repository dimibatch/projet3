import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'dateDebut'
})
export class DateDebutPipe implements PipeTransform {

  transform(value: Test, param_date?: string): Test {
    const date: Test[] = [];

    for (let i = 0; i < value.length; i++) {
      if (value[i].DateDebut === param_date) {
        date.push(value[i]);
      }
    }
    return date;
  }
}


