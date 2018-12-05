import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'testFamily'
})
export class TestFamilyPipe implements PipeTransform {

  transform(value: Test[], param_testFamily?: string): Test[] {

    let result: Test[] = [];

    if (param_testFamily == "" || param_testFamily == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].testFamily.indexOf(param_testFamily) >= 0) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }

}
