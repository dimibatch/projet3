import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'decorType'
})
export class DecorTypePipe implements PipeTransform {

  transform(value: Test[], param_decorType?: string): Test[] {

    let result: Test[] = [];

    if (param_decorType == "" || param_decorType == undefined) {
      return value;
    } else {
        for (let i = 0; i < value.length; i++) {
          if (value[i].decoType.toLowerCase() == param_decorType.toLowerCase()) {
            result.push(value[i]);
          }
        }
        return result;
    }
  }
    
  
}
