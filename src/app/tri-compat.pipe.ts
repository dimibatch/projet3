import { Pipe, PipeTransform } from '@angular/core';
import { Compat } from './compat';

@Pipe({
  name: 'triCompat'
})
export class TriCompatPipe implements PipeTransform {

  transform(value: Compat[] , param_mat_name:string): Compat[] {
    let result: Compat[] = [];
    if(param_mat_name == '' || param_mat_name == undefined){
      return value;
    } else {
      for(let i=0; i<value.length; i++){
        if ((value[i].name.toLowerCase()).indexOf(param_mat_name.toLowerCase()) >=0){
          result.push(value[i]);
        } 
      }
      return result;
    }

  }

}
