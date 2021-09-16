import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://613715dc8700c50017ef57b0.mockapi.io/api/users';
  constructor(private http: HttpClient) {}
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  addUser(data: User): Observable<User> {
    console.log(data);
    let returnValue = this.http.post<User>(
      this.apiUrl,
      JSON.stringify(data),
      httpOptions
    );
    console.log(returnValue);
    return returnValue;
  }
}
