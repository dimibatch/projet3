import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'materiau'
})
export class MateriauPipe implements PipeTransform {

  transform(value: Test[], param_material?: string): Test[] {
    let result: Test[] = [];

    if (param_material == "" || param_material == undefined) {
      return value;
    } else {
        for (let i = 0; i < value.length; i++) {
          if (value[i].material.toLowerCase == param_material.toLowerCase) {
            result.push(value[i]);
          }
        }
        return result;
      
      // let paramSplit: string[] = param_material.split(" ");
      // for (let j = 0; j < paramSplit.length; j++) {
      //   if (paramSplit[j] != "") {
      //     for (let i = 0; i < value.length; i++) {
      //       if (value[i].material.toLowerCase() == param_material.toLowerCase() && result.indexOf(value[i]) < 0) {
      //         result.push(value[i]);
      //       }
      //     }
      //   }
      // }
      // if (result.length == 0) {
      //   return value;
      // } else {
      //   return result;
      // }
    }
  }
} 
