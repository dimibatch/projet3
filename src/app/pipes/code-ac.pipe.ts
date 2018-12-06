import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'codeAC'
})
export class CodeACPipe implements PipeTransform {

  transform(value: Test[], param_codeAC: number): Test[] {
    let result: Test[] = [];

    for (let i = 0; i < value.length; i++) {
      if (value[i].codeAC == param_codeAC) {
        result.push(value[i]);
      }
    }
    return result;
  }
}
