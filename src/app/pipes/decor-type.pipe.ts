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
          if (value[i].decoType != null) {
            if (value[i].decoType.toLowerCase().indexOf(param_decorType.toLowerCase()) > -1) {
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
