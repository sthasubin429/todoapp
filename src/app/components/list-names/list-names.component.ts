import { Component, OnInit } from '@angular/core';
import { faFontAwesomeAlt } from '@fortawesome/free-brands-svg-icons';
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
}
