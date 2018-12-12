import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Compat } from './compat';

@Injectable({
  providedIn: 'root'
})
export class CompatService {

  private baseUrl = 'http://localhost:8080/api';
  private httpService: HttpClient;

  constructor(param_http_service: HttpClient) {
    this.httpService = param_http_service;
  }

  public getCompat(): Observable<Compat[]> {
    return this.httpService.get(`${this.baseUrl}` + "/compat").pipe(
      map(
        (param_my_response) => {
          let obj: any = param_my_response;
          return obj;
        }
      )
    )
  }
}


