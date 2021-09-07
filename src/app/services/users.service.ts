import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //with local json server
  private apiUrl = 'https://613715dc8700c50017ef57b0.mockapi.io/api/users';
  constructor(private http: HttpClient) {}
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
