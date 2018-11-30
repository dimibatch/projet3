import { Pipe, PipeTransform } from '@angular/core';
import { Compat } from './compat';

@Pipe({
  name: 'triCompat'
})
export class TriCompatPipe implements PipeTransform {

  transform(value: Compat[], param_mat_name): Compat[] {
    let result: Compat[] = [];

    if (param_mat_name == '' || param_mat_name == undefined) {
      return value;
    } else {
      param_mat_name = param_mat_name.split(" ");
      for (let j = 0; j < param_mat_name.length; j++) {
        for (let i = 0; i < value.length; i++) {
          if ((value[i].name.toLowerCase()).indexOf(param_mat_name[j].toLowerCase()) >= 0) {
            result.push(value[i]);
          }
        }
      }
   
      return result;
    }

  }

}
