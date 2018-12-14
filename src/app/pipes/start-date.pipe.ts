import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'startDate'
})
export class StartDatePipe implements PipeTransform {

  transform(value: Test[], param_startDate?: string): Test[] {
    let result: Test[] = [];

    if (param_startDate == "" || param_startDate == undefined) {
      return value;
    } else {
      let formatedDate = new Date(param_startDate);
        for (let i = 0; i < value.length; i++) {
          let dateFromArray = new Date(value[i].start);
          if (dateFromArray > formatedDate) {
            result.push(value[i]);
          }
        }
        return result;
    }
  
  }

}
