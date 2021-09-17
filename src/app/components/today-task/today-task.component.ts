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
      state(
        'hide',
        style({
          opacity: 0,
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
  showDel: boolean = false;

  constructor(
    private tasksService: TasksService,
    private dataService: DataService
  ) {}

  triggerAnimation: string = 'show';
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
    this.dataService.changeAnimationSubject('show');
  }

  checkStaus(): boolean {
    let arr = [
      ...new Set(this.taskList.filter((task) => task.status === true)),
    ];

    return arr.length > 0;
  }

  onClick() {
    let deleteTask = this.taskList.filter((task) => task.status === true);
    console.log(deleteTask);
    for (let task of deleteTask) {
      console.log(task);
      this.tasksService.deleteTask(task).subscribe(() => {
        //   this.taskList = this.taskList.filter((t) => t.id !== task.id);
        this.taskList.forEach((t, index) => {
          if (t.id === task.id) {
            this.taskList.splice(index, 1);
          }
        });

        console.log(this.taskList);
      });
    }
  }
}
