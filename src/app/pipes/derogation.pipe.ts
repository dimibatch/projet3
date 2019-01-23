import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'derogation'
})
export class DerogationPipe implements PipeTransform {

  transform(value: Test[], param_derogation?:string): Test[] {

    let result: Test[] = [];

    if(param_derogation == "" || param_derogation == "false" || param_derogation == undefined){
      return value;
    }
    for (let i = 0; i < value.length; i++) {
      if (value[i].derogation == param_derogation) {
        result.push(value[i]);
      }
    }
    return result;
  }

}
