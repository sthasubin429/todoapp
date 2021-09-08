import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/tasks';

@Component({
  selector: 'app-today-task',
  templateUrl: './today-task.component.html',
  styleUrls: ['./today-task.component.scss'],
})
export class TodayTaskComponent implements OnInit {
  constructor(private tasksService: TasksService) {}
  //   taskList: Task[];
  @Input() taskList: Task[];
  ngOnInit(): void {
    //  this.tasksService.getTasks().subscribe((tasks) => (this.taskList = tasks));
  }
}
