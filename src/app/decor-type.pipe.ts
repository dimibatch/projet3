import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'decorType'
})
export class DecorTypePipe implements PipeTransform {

  transform(value: Test[], param_decorType?: string): Test[] {

    let result: Test[] = [];

    if (param_decorType == "" || param_decorType == undefined) {
      return value;
    } else {
      let paramSplit: string[] = param_decorType.split(" ");
      for (let j = 0; j < paramSplit.length; j++) {
        if (paramSplit[j] != "") {
          for (let i = 0; i < value.length; i++) {
            if ((value[i].decoType.toLowerCase()).indexOf(param_decorType.toLowerCase()) >= 0 && result.indexOf(value[i])<0) {
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
