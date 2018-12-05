import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'cpqcp'
})
export class CpqcpPipe implements PipeTransform {

  transform(value: Test[], param_cpqcp?: string): Test[] {

    let result: Test[] = [];

    if (param_cpqcp == "" || param_cpqcp == undefined) {
      return value;
    } else {
      let paramSplit: string[] = param_cpqcp.split(" ");
      for (let j = 0; j < paramSplit.length; j++) {
        if (paramSplit[j] != "") {
          for (let i = 0; i < value.length; i++) {
            if ((value[i].cpQCP.toLowerCase()).indexOf(param_cpqcp.toLowerCase()) >= 0 && result.indexOf(value[i])<0) {
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
