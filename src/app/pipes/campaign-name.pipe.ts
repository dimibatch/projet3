import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'campaignName'
})
export class CampaignNamePipe implements PipeTransform {

  transform(value: Test[], param_campaignName?: string): Test[] {

    let result: Test[] = [];

    if (param_campaignName == "" || param_campaignName == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if ((value[i].campaignName.toLowerCase()).indexOf(param_campaignName.toLowerCase()) >= 0) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }
}
