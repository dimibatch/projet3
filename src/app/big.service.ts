import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Test } from './test';
import { OnGoingTest } from './on-going-test';


@Injectable({
  providedIn: 'root'
})
export class BigService {

  private baseUrl = 'http://localhost:8080/api';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  // TEST METHODS 

  // public getBigData():Observable<Test[]> {
  //   return this.http.get("assets/resultats_recherche.json").pipe(
    
  // Method to get all data from Test Table.
  public getBigData(): Observable<Test[]> {
   // return this.http.get(`${this.baseUrl}` + "/test").pipe(
    return this.http.get("assets/resultats_recherche.json").pipe(
      map(
        (param: any) => {
          let myData: Test[] = param as Test[];

          for (let i: number = 0; i < myData.length; i++) {
            myData[i].testString = this.getTestString(myData[i]);
          }
          return myData;
        }
      )
    )
  }

  // Method to get One test from Test Table
  public getTest(testid: number): Observable<Test> {
    return this.http.get(`${this.baseUrl}/gettestbyid?testId=${testid}`).pipe(
      map(
        (param: any) => {
          let myData: Test = param as Test;
          return myData;
        }
      )
    )
  }

  // Method to delete a Test
  public deleteTestFromDB(testid: number){
    
  }

  // Method to update a Test

  public updateTestFromDB(testId:number, test: Test){}
    
  // Method to add a Test
  public addTest(test: Test): Observable<any> {
    return this.http.get(`${this.baseUrl}/test/create?typeAC=${test.typeAC}&codeAC=${test.codeAC}&codeG=${test.codeG}&productName=${test.productName}&campaignCode=${test.campaignCode}&campaignName=${test.campaignName}&franchise=${test.franchise}&cpDev=${test.cpDev}&cpQCP=${test.cpQCP}&provider=${test.provider}&material=${test.material}&decoType=${test.decoType}&teinteMasse=${test.teinteMasse}&packModel=${test.packModel}&submitNumber=${test.submitNumber}&vracName=${test.vracName}&vracNumber=${test.vracNumber}&formuleNumber=${test.formuleNumber}&testFamily=${test.testFamily}&test=${test.test}&start=${test.start}&result=${test.result}&derogation=${test.derogation}&comments=${test.comments}`);
  }




  // ONGOINGTEST METHODS 

  // Method to get all data from OnGoingTest Table.
  public getOnGoingTestsData(): Observable<OnGoingTest[]> {
    return this.http.get(`${this.baseUrl}` + "/ongoingtest").pipe(
      map(
        (param: any) => {
          let myData: OnGoingTest[] = param as OnGoingTest[];
          return myData;
        }
      )
    )
  }

  // Method to add an OnGoingTest
  public addOnGoingTest(ongoingtest: OnGoingTest){
  }




  private getTestString(p_test: Test): string {
    let str: string = p_test.typeAC + " " +
      p_test.codeG + " " +
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
