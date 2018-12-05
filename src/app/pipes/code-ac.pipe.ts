import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'codeAC'
})
export class CodeACPipe implements PipeTransform {

  transform(value: Test[], param_codeAC: string): Test[] {

    let result: Test[] = [];

    if (param_codeAC == "" || param_codeAC == undefined) {
      return value;
    } else {
      let paramSplit: string[] = param_codeAC.split(" ");
      for (let j = 0; j < paramSplit.length; j++) {
        if (paramSplit[j] != "") {
          for (let i = 0; i < value.length; i++) {
            if (value[i].codeAC.toLowerCase() == param_codeAC.toLowerCase() && result.indexOf(value[i]) < 0) {
              result.push(value[i]);
            }
          }
        }
      }
      if (result.length == 0) {
        return value;
      } else {
        return result;
      }
    }
  }
}
