import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectAttributes'
})
export class SelectAttributesPipe implements PipeTransform {

  transform(value: any[], param?: string): any[] {
    
    if (param == "" || param == undefined || param == null) {
      return value;
    }

    let splitParam: string[] = param.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ");
    let tempResult: any[] = [];
    let verticalSubstanceFound: boolean = false;
    
    for (let k=0; k<splitParam.length; k++) {
      for (let j=0; j<value[0].length; j++){
        if (value[0][j][0].indexOf(splitParam[k]) > -1) {
          verticalSubstanceFound = true;
        } else {
          continue;
        }
      }
      
    }

    if (!verticalSubstanceFound) {
      return value;
    }

    for (let i=0; i<value.length; i++) {
      tempResult.push([]);
      for (let j=0; j<value[i].length; j++) {
        if (value[i][j][0] == "name") {
          tempResult[i].push(value[i][j]);
        }
        for (let k=0; k<splitParam.length; k++) {
          if (value[i][j][0] != "name" && value[i][j][0].indexOf(splitParam[k]) > -1) {
            tempResult[i].push(value[i][j]);
            // if (tempResult[i][1] != value[i][j] && tempResult[i][0] != value[i][j]){
            //   tempResult[i].push(value[i][j]);
            // }
            for (let n=0; n<tempResult[i].length-1; n++){
              if (tempResult[i][n] == tempResult[i][n+1]) {
                tempResult[i].splice(n, 1);
              }
            }
            
          }
        }
      }
    }
    return tempResult;
  }

}
