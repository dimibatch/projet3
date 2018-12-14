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

  // Method to get all data from Test Table.
  public getBigData(): Observable<Test[]> {
    return this.http.get(`${this.baseUrl}` + "/test").pipe(
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

  // Method to add a Test
  public addTest(test: Test) {
    
  }

  // Method to delete a Test
  public deleteTestFromDB(testid: number){
    
  }

  // Method to update a Test

  public updateTestFromDB(testId:number, test: Test){
    
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
