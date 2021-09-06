import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, TaskList } from '../tasks';

//for local json server
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  //For local json server
  //   private apiUrl = 'http://localhost:5000/tasks';
  //   constructor(private http: HttpClient) {}
  //   getTasks(): Observable<Task[]> {
  //     return this.http.get<Task[]>(this.apiUrl);
  //   }
  //   addTask(task: Task): Observable<Task> {
  //     return this.http.post<Task>(this.apiUrl, task, httpOptions);
  //   }
  getTasks(): Observable<Task[]> {
    let taskList = of(TaskList);
    return taskList;
  }
  addTask(task: Task): Observable<Task> {
    TaskList.push(task);
    return of(task);
  }
  getListNames(): Observable<string[]> {
    let listNames = [...new Set(TaskList.map((task) => task.list))];
    return of(listNames);
  }

  getListTasks(listName: string): Observable<Task[]> {
    let filteredList = TaskList.filter((task) => task.list === listName);

    return of(filteredList);
  }
}

//Priority Shorting funciton doesnot add tasks on adding tasks
//   priorityOrder = ['High', 'Medium', 'Low'];

//   getTasks(): Observable<Task[]> {
//     let taskList = [...TaskList];
//     taskList = taskList.sort((a, b) => {
//       return (
//         this.priorityOrder.indexOf(a.priority) -
//         this.priorityOrder.indexOf(b.priority)
//       );
//     });

//     return of(taskList);
//   }
//   addTask(task: Task): Observable<Task> {
//     TaskList.push(task);
//     return of(task);
//   }
//   getListNames(): Observable<string[]> {
//     let listNames = [...new Set(TaskList.map((task) => task.list))];
//     return of(listNames);
//   }

//   getListTasks(listName: string): Observable<Task[]> {
//     let filteredList = TaskList.filter((task) => task.list === listName);
//     filteredList = filteredList.sort((a, b) => {
//       return (
//         this.priorityOrder.indexOf(a.priority) -
//         this.priorityOrder.indexOf(b.priority)
//       );
//     });

//     return of(filteredList);
//   }