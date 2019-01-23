import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: Test[], param_test?: string): Test[] {

    let result: Test[] = [];

    if (param_test == "" || param_test == undefined) {
      return value;
    } else {
      let splitParam: string[] = param_test.split(" ")
        for (let i = 0; i < value.length; i++) {
          if (value[i].test != null) {
            // if (value[i].test.toLowerCase().indexOf(param_test.toLowerCase()) > -1) {
            //   result.push(value[i]);
            // }
            if (value[i].test.toLowerCase().indexOf(splitParam[0].toLowerCase()) >= 0) {
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
