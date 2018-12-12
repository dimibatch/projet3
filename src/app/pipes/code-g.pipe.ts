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
        for (let i = 0; i < value.length; i++) {
          if (value[i].codeG.toLowerCase() == param_codeG.toLowerCase()) {
            result.push(value[i]);
          }
        }
        return result;
    }
  
  }

}
