import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'franchise'
})
export class FranchisePipe implements PipeTransform {

  transform(value: Test[], param_franchise?: string): Test[] {

    let result: Test[] = [];
    if (param_franchise == undefined || param_franchise == '') {
      return value;
    } else {
      let paramSplit: string[] = param_franchise.split(" ");
      for (let j = 0; j < paramSplit.length; j++) {
        if (paramSplit[j] != "") {
          for (let i = 0; i < value.length; i++) {
            if (value[i].franchise.toLowerCase() == param_franchise.toLowerCase() && result.indexOf(value[i]) < 0) {
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
