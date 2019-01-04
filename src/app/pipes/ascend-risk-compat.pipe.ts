import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascendRiskCompat'
})
export class AscendRiskCompatPipe implements PipeTransform {

  transform(tab: any[]): any {

    let results = [];

    for (let k: number = 0; k < tab.length; k++) {

      let value: any = tab[k];
      let sortedProp = [];

      for (let i = 10; i <= 40; i = i + 10) {
        for (let prop in value) {
          if (prop == "name" && !sortedProp[0]) {
            sortedProp.push(prop + ":" + value[prop]);
          } else if (value[prop] == i) {
            sortedProp.push(prop + ":" + value[prop]);
          }
        }
      }

      for (let j = 0; j < sortedProp.length; j++) {
        sortedProp[j] = sortedProp[j].split(":");
      }

      results.push(sortedProp);
    }
    return (results);
  }

}
