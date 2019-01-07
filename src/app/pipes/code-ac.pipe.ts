import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'codeAC'
})
export class CodeACPipe implements PipeTransform {

  transform(value: Test[], param_vracName?: string): Test[] {

    let result: Test[] = [];

    if (param_vracName == "" || param_vracName == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].codeAC.toLowerCase()==param_vracName.toLowerCase()) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }
}
