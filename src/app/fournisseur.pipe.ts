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
      let paramSplit: string[] = param_fournisseur.split(" ");
      for (let j = 0; j < paramSplit.length; j++) {
        if (paramSplit[j] != "") {
          for (let i = 0; i < value.length; i++) {
            if ((value[i].provider.toLowerCase()).indexOf(param_fournisseur.toLowerCase()) >= 0 && result.indexOf(value[i])<0) {
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
