import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'vracNumber'
})
export class VracNumberPipe implements PipeTransform {

  transform(value: Test[], param_vracNumber?:string): Test[] {
    let result: Test[] = [];

    if (param_vracNumber == "" || param_vracNumber == undefined) {
      return value;
    } else {
        for (let i = 0; i < value.length; i++) {
          if (value[i].vracNumber != null) {
            if (value[i].vracNumber.toLowerCase() == param_vracNumber.toLowerCase()) {
              result.push(value[i]);
            }
          } else {
            continue;
          }
          
        }
        return result;
    }
  }
}
