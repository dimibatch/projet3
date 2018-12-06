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
    return this.http.get("assets/TABLE_4.json").pipe(
      map(
        (param:any) => {
          let myData:Test[] = param as Test[];
          return myData;
        }
      )
    )
  }
}
