import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(value: Test[], param_productName?: string): Test[] {

    let result: Test[] = [];

    if (param_productName == "" || param_productName == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if ((value[i].productName.toLowerCase()).indexOf(param_productName.toLowerCase()) >= 0) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }
}

