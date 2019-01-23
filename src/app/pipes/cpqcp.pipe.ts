import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'cpqcp'
})
export class CpqcpPipe implements PipeTransform {

  transform(value: Test[], param_cpqcp?: string): Test[] {

    let result: Test[] = [];

    if (param_cpqcp == "" || param_cpqcp == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].cpQCP != null) {
          if (value[i].cpQCP.toLowerCase().indexOf(param_cpqcp.toLowerCase()) > -1) {
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
