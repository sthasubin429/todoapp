import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

import { Task } from '../tasks';

// for local json server
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'https://613715dc8700c50017ef57b0.mockapi.io/api/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  addTask(task: Task): Observable<Task> {
    let returnValue = this.http.post<Task>(this.apiUrl, task, httpOptions);
    console.log(returnValue);
    return returnValue;
  }
  getListNames(): Observable<string[]> {
    return this.http
      .get<Task[]>(this.apiUrl)
      .pipe(map((tasks) => [...new Set(tasks.map((task) => task.list))]));
  }

  getListTasks(listName: string) {
    return this.http
      .get<Task[]>(this.apiUrl)
      .pipe(map((tasks) => tasks.filter((task) => task.list === listName)));
  }

  deleteTask(task: Task): Observable<Task> {
    console.log(task);
    console.log(task.id);
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }
}
