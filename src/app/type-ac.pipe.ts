import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'typeAc'
})
export class TypeAcPipe implements PipeTransform {

  transform(value: Test[], searchBarContent?: string): any {
    let result: Test[] = [];

    if (searchBarContent == "" || searchBarContent == undefined) {
      return value;
    } else {
      let paramSplit: string[] = searchBarContent.split(" ");
      for (let j = 0; j < paramSplit.length; j++) {
        if (paramSplit[j] != "") {
          for (let i = 0; i < value.length; i++) {




            if (value[i].typeAC.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].result.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].codeG.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].productName.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].campaignCode.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].campaignName.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].franchise.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].cpQCP.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].codeAC.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].provider.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].material.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].decoType.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].teinteMasse.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].packModel.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].submitNumber.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].vracName.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].vracNumber.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].formuleNumber.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].testFamily.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].test.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].start.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            if (value[i].result.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
              result.push(value[i]);
            }

            // if (value[i].derogation.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
            //   result.push(value[i]);
            // }

            if (value[i].comments.toLowerCase().indexOf(paramSplit[j].toLowerCase()) > -1 && result.indexOf(value[i])<0) {
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
