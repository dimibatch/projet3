import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'typeAc'
})
export class TypeAcPipe implements PipeTransform {

  transform(value: Test[], param_typeac?: string): any {
    let result: Test[] = [];

    if (param_typeac == "" || param_typeac == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].typeAC.toLowerCase().indexOf(param_typeac.toLowerCase()) > -1) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }

}
