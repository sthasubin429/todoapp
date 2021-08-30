import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';
import { NewTaskComponent } from '../new-task/new-task.component';
import { Task } from 'src/app/tasks';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  taskList: Task[];
  constructor(public dialog: MatDialog, private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.taskList = tasks));
  }

  openCreateNewTask(): void {
    this.dialog.open(NewTaskComponent, {
      width: '800px',
    });
  }
}
