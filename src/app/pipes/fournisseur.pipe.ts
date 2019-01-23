import { Pipe, PipeTransform } from '@angular/core';
import { Test } from '../test';

@Pipe({
  name: 'fournisseur'
})
export class FournisseurPipe implements PipeTransform {

  transform(value: Test[], param_vracName?: string): Test[] {

    let result: Test[] = [];

    if (param_vracName == "" || param_vracName == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].provider != null) {
          if (value[i].provider.toLowerCase().indexOf(param_vracName.toLowerCase()) > -1) {
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
