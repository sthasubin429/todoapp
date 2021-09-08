import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let signUpData = {};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'https://613715dc8700c50017ef57b0.mockapi.io/api/users';
  constructor(private http: HttpClient) {}

  getSignUpData(): Observable<any> {
    let data = of(signUpData);
    return data;
  }

  setSignUpData(data: {}): Observable<any> {
    signUpData = data;
    return of(signUpData);
  }

  resetSignUpData() {
    signUpData = {};
  }

  postSignUpData(data: {}): Observable<any> {
    console.log(data);
    let returnValue = this.http.post<any>(
      this.apiUrl,
      JSON.stringify(data),
      httpOptions
    );
    console.log(returnValue);
    return returnValue;
  }
}
