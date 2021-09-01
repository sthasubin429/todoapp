import { Injectable } from '@angular/core';
import { User, UserList } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //with local json server
  //   private apiUrl = 'http://localhost:5000/users';
  //   constructor(private http: HttpClient) {}
  //   getUser(): Observable<User[]> {
  //     return this.http.get<User[]>(this.apiUrl);
  //   }
  getUser(): Observable<User[]> {
    const userList = of(UserList);
    return userList;
  }
}
