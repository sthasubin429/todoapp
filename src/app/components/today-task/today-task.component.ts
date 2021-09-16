import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/tasks';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-today-task',
  templateUrl: './today-task.component.html',
  styleUrls: ['./today-task.component.scss'],
  animations: [
    trigger('popOverState', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      transition(
        '* => *',
        animate(
          '1000ms ease',
          keyframes([
            style({ transform: 'translate(0, -50px)', opacity: 0 }),
            style({ transform: 'translate(0, 0px)', opacity: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class TodayTaskComponent implements OnInit {
  constructor(
    private tasksService: TasksService,
    private dataService: DataService
  ) {}

  triggerAnimation: boolean = false;
  //   taskList: Task[];
  @Input() taskList: Task[];
  @Input() animateChildren: boolean;

  get stateName() {
    return this.triggerAnimation ? 'show' : 'hide';
  }

  ngOnInit(): void {
    //  this.tasksService.getTasks().subscribe((tasks) => (this.taskList = tasks));
    this.dataService.currentAnimation.subscribe(
      (animation) => (this.triggerAnimation = animation)
    );
  }
}
