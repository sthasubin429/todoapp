import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private apiUrl = 'https://613715dc8700c50017ef57b0.mockapi.io/api/listnames';

  constructor(private http: HttpClient) {}

  getListNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getList(): Observable<any[]> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(map((listNames) => listNames.map((lists) => lists.list)));
  }

  addListNames(data: {}): Observable<any> {
    console.log(data);

    let returnValue = this.http.post<any>(
      this.apiUrl,
      JSON.stringify(data),
      httpOptions
    );
    console.log(returnValue.subscribe((res) => console.log(res)));

    return returnValue;
  }
}
