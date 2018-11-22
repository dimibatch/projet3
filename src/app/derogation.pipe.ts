import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'derogation'
})
export class DerogationPipe implements PipeTransform {

  transform(value: Test[]): Test[] {

    let result: Test[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i].derogation == true) {
        result.push(value[i]);
      }
    }
    return result;
  }

}
