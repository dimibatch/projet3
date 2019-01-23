import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: Test[], param_result?: string): Test[]{
    let result: Test[] = [];

    if (param_result == "" || param_result == undefined) {
      return value;
    } else {
        for (let i = 0; i < value.length; i++) {
          if (value[i].result != null) {
            if (value[i].result.toLowerCase() == param_result.toLowerCase()) {
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
