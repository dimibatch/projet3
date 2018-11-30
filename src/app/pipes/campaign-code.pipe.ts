import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'campaignCode'
})
export class CampaignCodePipe implements PipeTransform {

  transform(value: Test[], param_campaignCode:string): Test[] {
    let result: Test[] = [];
    if (param_campaignCode == undefined || param_campaignCode == ''){
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].campaignCode.toLowerCase() == param_campaignCode.toLowerCase()) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }
}
