import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'packModel'
})
export class PackModelPipe implements PipeTransform {

  transform(value: Test[], param_packModel?: string): Test[] {

    let result: Test[] = [];

    if (param_packModel == "" || param_packModel == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].packModel.toLowerCase().indexOf(param_packModel.toLowerCase()) > -1) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }

}
