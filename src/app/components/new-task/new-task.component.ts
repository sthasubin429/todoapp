import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/tasks';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListsService } from 'src/app/services/lists.service';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  addTaskForm!: FormGroup;

  listControl = new FormControl('', Validators.required);
  lists = [];

  priorityControl = new FormControl('', Validators.required);
  priorities: string[] = ['High', 'Medium', 'Low'];

  taskName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z ]*$'),
    Validators.minLength(3),
  ]);
  dateControl = new FormControl('', Validators.required);

  triggerAnimation: string;

  constructor(
    private fb: FormBuilder,
    private taskService: TasksService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ListsService,
    private dataService: DataService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.listService
      .getListNames()
      .subscribe((lists) => (this.lists = lists.map((list) => list.list)));

    this.dataService.currentAnimation.subscribe(
      (animation) => (this.triggerAnimation = animation)
    );
    this.addTaskForm = this.fb.group({
      taskName: this.taskName,
      priorityControl: this.priorityControl,
      listControl: this.listControl,
      dateControl: this.dateControl,
    });
  }

  addNewTask(): void {
    let newTask: Task = {
      name: this.taskName.value,
      list: this.listControl.value,
      priority: this.priorityControl.value,
      dateTime: this.dateControl.value,
      status: false,
      id: Math.random(),
    };

    if (this.addTaskForm.valid) {
      this.taskService.addTask(newTask).subscribe((task) => {
        this.data.taskList.unshift(task);
        this.dataService.changeAnimationSubject('show');
        this.dialog.closeAll();
      });
      this.dialog.closeAll();

      this._snackBar.open('Task Added Sucessfully', null, {
        duration: 2000,
      });
    }
  }
}
