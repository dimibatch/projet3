import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'vracNumber'
})
export class VracNumberPipe implements PipeTransform {

  transform(value: Test[], param_vracNumber:string): Test[] {
    let result: Test[] = [];

    for (let i = 0; i < value.length; i++) {
      if (value[i].vracNumber == param_vracNumber) {
        result.push(value[i]);
      }
    }
    return result;
  }

}
