import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/tasks';
@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.scss'],
})
export class ListNamesComponent implements OnInit {
  panelOpenState = false;
  listNames = [];
  constructor(private tasksService: TasksService) {}

  @Output() openNewList = new EventEmitter();
  @Input() taskList: Task[];

  ngOnInit(): void {
    this.tasksService
      .getListNames()
      .subscribe((listName) => (this.listNames = listName));

    //  this.listNames = [...new Set(this.taskList.map((task) => task.list))];
    console.log(this.taskList);
  }

  getListNames(listName: string): Task[] {
    //  let listTask = [];
    //  this.tasksService
    //    .getListTasks(listName)
    //    .subscribe((listTask) => (listTask = listTask));
    //  return listTask;
    return this.taskList.filter((task) => task.list === listName);
  }

  onClick() {
    this.openNewList.emit();
  }
}
