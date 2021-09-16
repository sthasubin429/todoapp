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
  //   listNames = [];
  constructor(private tasksService: TasksService) {}

  @Output() openNewList = new EventEmitter();
  @Input() taskList: Task[];
  @Input() listNames: any;

  ngOnInit(): void {
    //  this.tasksService
    //    .getListNames()
    //    .subscribe((listName) => (this.listNames = listName));

    //  this.listNames = [...new Set(this.taskList.map((task) => task.list))];
    console.log(this.taskList);
    console.log(this.listNames);
  }

  getListNames(listName: string): Task[] {
    //  let listTask = [];2
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
