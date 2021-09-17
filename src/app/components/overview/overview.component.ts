import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Task } from 'src/app/tasks';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnChanges {
  @Input() taskList: Task[];

  todayTask: number = 0;
  upcommingTask: number = 0;
  overdueTask: number = 0;
  constructor() {}

  ngOnInit(): void {
    console.log(this.taskList);
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    let todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    this.todayTask = 0;
    this.upcommingTask = 0;
    this.overdueTask = 0;
    for (let task of this.taskList) {
      let tempDate = new Date(task.dateTime);
      tempDate.setHours(0, 0, 0, 0);

      console.log(todayDate, tempDate);
      console.log(todayDate > tempDate);
      console.log(todayDate < tempDate);

      if (todayDate > tempDate) {
        this.overdueTask = this.overdueTask + 1;
      } else if (todayDate < tempDate) {
        this.upcommingTask = this.upcommingTask + 1;
      } else {
        this.todayTask = this.todayTask + 1;
      }

      console.log(this.todayTask, this.upcommingTask, this.overdueTask);
    }
  }
}
