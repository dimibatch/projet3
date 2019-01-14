import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  // Get list of all users
  public getAllUsers(p_apikey:string): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/users/all/${p_apikey}`).pipe(
      map(
        (param: any) => {
          let myData: User[] = param as User[];
          return myData;
        }
      )
    )
  }

  // Get one user
  public getUser(userId: number): Observable<User> {
    return this.http.get(`${this.baseUrl}/users/${userId}`).pipe(
      map(
        (param: any) => {
          let myData: User = param as User;
          return myData;
        }
      )
    )
  }

  // Add a user
  public addUser(newUser:User){
    return this.http.post(`${this.baseUrl}/users`,newUser);
  }

  //Update a user
  public updateUser(userId:number, changeOnUser:User){
    return this.http.put(`${this.baseUrl}/users/${userId}`, changeOnUser);
  }

  //Delete a user
  public deleteUser(userId:number){
    return this.http.delete(`${this.baseUrl}/users/${userId}`);
  }


}
