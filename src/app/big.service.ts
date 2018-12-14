import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Test } from './test';


@Injectable({
  providedIn: 'root'
})
export class BigService {
  private http:HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
  }

  public getBigData():Observable<Test[]> {
    return this.http.get("assets/resultats_recherche.json").pipe(
      map(
        (param:any) => {
          let myData:Test[] = param as Test[];

          for( let i:number = 0; i < myData.length; i++ ){
            myData[i].testString = this.getTestString(myData[i]);
          }

          return myData;
        }
      )
    )
  }


  private getTestString( p_test:Test ):string{
    let str:string = p_test.typeAC + " " +
        p_test.codeG  + " " +
        p_test.result + " " +
        p_test.productName + " " +
        p_test.campaignCode + " " +
        p_test.campaignName + " " +
        p_test.franchise + " " +
        p_test.cpQCP + " " +
        p_test.codeAC + " " +
        p_test.provider + " " +
        p_test.material + " " + 
        p_test.decoType + " " +
        p_test.packModel + " " +
        p_test.vracName + " " +
        p_test.vracNumber + " " +
        p_test.testFamily + " " +
        p_test.test;

    return str.toLowerCase();
  }
}
