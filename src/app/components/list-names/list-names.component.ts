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
  constructor(private tasksService: TasksService) {}

  @Output() openNewList = new EventEmitter();
  @Input() taskList: Task[];
  @Input() listNames: any;

  ngOnInit(): void {
    console.log(this.taskList);
    console.log(this.listNames);
  }

  getListNames(listName: string): Task[] {
    return this.taskList.filter((task) => task.list === listName);
  }

  onClick() {
    this.openNewList.emit();
  }
}
