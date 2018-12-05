import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'franchise'
})
export class FranchisePipe implements PipeTransform {

  transform(value: Test[], param_franchise?: string): Test[] {

    let result: Test[] = [];

    if (param_franchise == "" || param_franchise == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].franchise.toLowerCase().indexOf(param_franchise.toLowerCase()) > -1) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }

}
