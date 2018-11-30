import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'fournisseur'
})
export class FournisseurPipe implements PipeTransform {

  transform(value: Test[], param_fournisseur?: string): Test[] {

    let result: Test[] = [];

    if (param_fournisseur == "" || param_fournisseur == undefined) {
      return value;
    } else {
      for (let i = 0; i < value.length; i++) {
        if (value[i].provider.toLowerCase().indexOf(param_fournisseur.toLowerCase()) > -1) {
          result.push(value[i]);
        }
      }
      return result;
    }
  }

}
