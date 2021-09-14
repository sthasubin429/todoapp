import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';
import { NewTaskComponent } from '../new-task/new-task.component';
import { Task } from 'src/app/tasks';
import { NewListComponent } from '../new-list/new-list.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  taskList: Task[];
  animateChildren = false;
  priorityOrder = ['High', 'Medium', 'Low'];

  constructor(public dialog: MatDialog, private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks) =>
        (this.taskList = tasks.sort((a, b) => {
          return (
            this.priorityOrder.indexOf(a.priority) -
            this.priorityOrder.indexOf(b.priority)
          );
        }))
    );
  }

  openCreateNewTask(): void {
    this.dialog.open(NewTaskComponent, {
      width: '800px',
      data: {
        taskList: this.taskList,
      },
    });
  }

  openCreateNewList(): void {
    this.dialog.open(NewListComponent, {
      width: '800px',
      data: { taskList: this.taskList },
    });
  }
}
