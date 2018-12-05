import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'codeG'
})
export class CodeGPipe implements PipeTransform {

  transform(value: Test[], param_codeG: string): Test[] {
    let result: Test[] = [];

    if (param_codeG == "" || param_codeG == undefined) {
      return value;
    } else {
      let paramSplit: string[] = param_codeG.split(" ");
      for (let j = 0; j < paramSplit.length; j++) {
        if (paramSplit[j] != "") {
          for (let i = 0; i < value.length; i++) {
            if (value[i].codeG.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
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
