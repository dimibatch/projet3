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
    return this.http.get(`${this.baseUrl}/test/${testid}`).pipe(
      map(
        (param: any) => {
          let myData: Test = param as Test;
          return myData;
        }
      )
    )
  }

  // Method to update a Test

  public updateTestFromDB(testid: number, test: Test) {
    return this.http.put(`${this.baseUrl}/test/${testid}`, test);
  }

  // Method to delete a Test

  public deleteTestFromDB(testid: number) {
    return this.http.delete(`${this.baseUrl}/test/${testid}`);
  }

  // Method to add a Test

  public addTest(newTest: Test) {
    return this.http.post(`${this.baseUrl}/test`, newTest);
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

  // Method to get One OnGoingTest from OnGoingTest Table
  public getOnGoingTest(testid: number): Observable<OnGoingTest> {
    return this.http.get(`${this.baseUrl}/ongoingtest/${testid}`).pipe(
      map(
        (param: any) => {
          let myData: OnGoingTest = param as OnGoingTest;
          return myData;
        }
      )
    )
  }

  // Method to update a OnGoingTest

  public updateOnGoingTestFromDB(testid: number, test: OnGoingTest) {
    return this.http.put(`${this.baseUrl}/ongoingtest/${testid}`, test);
  }

  // Method to delete a Test

  public deleteOnGoingTestFromDB(testid: number) {
    return this.http.delete(`${this.baseUrl}/ongoingtest/${testid}`);
  }

  // Method to add an OnGoingTest
  public addOnGoingTest(test: OnGoingTest) {
    return this.http.post(`${this.baseUrl}/ongoingtest`, test);
  }

  // Method to transfer a test from OnGoingTestDB to TestDB
  public validateTest(testid:number){
    return this.http.get(`${this.baseUrl}/ongoingtest/validate/${testid}`);
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
