import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'materiau'
})
export class MateriauPipe implements PipeTransform {

  transform(value: Test[], param_material?: string): Test[] {

    let result: Test[] = [];

    if (param_material == "" || param_material == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].material.toLowerCase().indexOf(param_material.toLowerCase()) > -1) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }

}
