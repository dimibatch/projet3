import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'endDate'
})
export class EndDatePipe implements PipeTransform {

  transform(value: Test[], param_endDate?: string, param_page?:number): any {
    let result: Test[] = [];

    if (param_endDate == "" || param_endDate == undefined) {
      return value.slice( param_page * 25 , (param_page * 25) + 25 );
    } else {
      let formatedDate = new Date(param_endDate);
        for (let i = 0; i < value.length; i++) {
          let dateFromArray = new Date(value[i].start);
          if (dateFromArray < formatedDate) {
            result.push(value[i]);
          }
        }
        return result.slice( param_page * 25 , (param_page * 25) + 25 );
    }
  
  }

}
