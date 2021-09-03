import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  ngOnInit(): void {
    this.tasksService
      .getListNames()
      .subscribe((listName) => (this.listNames = listName));
  }

  getListNames(listName: string): Task[] {
    let taskList = [];
    this.tasksService
      .getListTasks(listName)
      .subscribe((listTask) => (taskList = listTask));
    return taskList;
  }

  onClick() {
    this.openNewList.emit();
  }
}
