import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'realTypeAc'
})
export class RealTypeAcPipe implements PipeTransform {

  transform(value: Test[], param_typeAc?: string): Test[] {

    let result: Test[] = [];

    if (param_typeAc == "" || param_typeAc == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].typeAC != null) {
          if (value[i].typeAC.toLowerCase().indexOf(param_typeAc.toLowerCase()) > -1) {
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
