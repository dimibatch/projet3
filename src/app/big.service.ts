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

<<<<<<< HEAD
  // Method to get all data from Test Table.
  public getBigData(): Observable<Test[]> {
    return this.http.get(`${this.baseUrl}` + "/test").pipe(
=======
  public getBigData():Observable<Test[]> {
    return this.http.get("assets/resultats_recherche_3(1).json").pipe(
>>>>>>> bf5bcec36ca53c6c3c403ae898ef5eac59893b9a
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

    // Method to get all data from Test Table.
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
  public addOnGoingTest(ongoingtest: OnGoingTest): Observable<any> {
    return this.http.get(`${this.baseUrl}/ongoingtest/create?typeAC=${ongoingtest.typeAC}&codeAC=${ongoingtest.codeAC}&codeG=${ongoingtest.codeG}&productName=${ongoingtest.productName}&campaignCode=${ongoingtest.campaignCode}&campaignName=${ongoingtest.campaignName}&franchise=${ongoingtest.franchise}&cpDev=${ongoingtest.cpDev}&cpQCP=${ongoingtest.cpQCP}&provider=${ongoingtest.provider}&material=${ongoingtest.material}&decoType=${ongoingtest.decoType}&teinteMasse=${ongoingtest.teinteMasse}&packModel=${ongoingtest.packModel}&submitNumber=${ongoingtest.submitNumber}&vracName=${ongoingtest.vracName}&vracNumber=${ongoingtest.vracNumber}&formuleNumber=${ongoingtest.formuleNumber}&testFamily=${ongoingtest.testFamily}&test=${ongoingtest.test}&quantity=${ongoingtest.quantity}&start=${ongoingtest.start}&result=${ongoingtest.result}&derogation=${ongoingtest.derogation}&comments=${ongoingtest.comments}&ReceptionVrac=${ongoingtest.ReceptionVrac}&ReceptionZAC=${ongoingtest.ReceptionZAC}&DebutReel=${ongoingtest.DebutReel}&DebutPrevu=${ongoingtest.DebutPrevu}&T1Reel=${ongoingtest.T1Reel}&T1Prevu=${ongoingtest.T1Prevu}&T2Reel=${ongoingtest.T2Reel}&T2Prevu=${ongoingtest.T2Prevu}&T3Reel=${ongoingtest.T3Reel}&T3Prevu=${ongoingtest.T3Prevu}`);
  }

  // Method to add a Test
  public addTest(test: Test): Observable<any> {
    return this.http.get(`${this.baseUrl}/test/create?typeAC=${test.typeAC}&codeAC=${test.codeAC}&codeG=${test.codeG}&productName=${test.productName}&campaignCode=${test.campaignCode}&campaignName=${test.campaignName}&franchise=${test.franchise}&cpDev=${test.cpDev}&cpQCP=${test.cpQCP}&provider=${test.provider}&material=${test.material}&decoType=${test.decoType}&teinteMasse=${test.teinteMasse}&packModel=${test.packModel}&submitNumber=${test.submitNumber}&vracName=${test.vracName}&vracNumber=${test.vracNumber}&formuleNumber=${test.formuleNumber}&testFamily=${test.testFamily}&test=${test.test}&quantity=${test.quantity}&start=${test.start}&result=${test.result}&derogation=${test.derogation}&comments=${test.comments}`);
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
