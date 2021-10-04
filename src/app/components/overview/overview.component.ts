import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() taskList: Task[];

  constructor() {}

  ngOnInit(): void {}

  getStats(): {} {
    let todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    let todayTask: number = 0;
    let upcommingTask: number = 0;
    let overdueTask: number = 0;
    for (let task of this.taskList) {
      let tempDate = new Date(task.dateTime);
      tempDate.setHours(0, 0, 0, 0);

      if (todayDate > tempDate) {
        overdueTask = overdueTask + 1;
      } else if (todayDate < tempDate) {
        upcommingTask = upcommingTask + 1;
      } else {
        todayTask = todayTask + 1;
      }
    }
    return {
      todayTask: todayTask,
      upcommingTask: upcommingTask,
      overdueTask: overdueTask,
    };
  }
}
