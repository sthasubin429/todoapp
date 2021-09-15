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

  constructor(
    private fb: FormBuilder,
    private taskService: TasksService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private listService: ListsService
  ) {}

  ngOnInit(): void {
    this.listService
      .getListNames()
      .subscribe((lists) => (this.lists = lists.map((list) => list.list)));
    this.addTaskForm = this.fb.group({
      taskName: this.taskName,
      priorityControl: this.priorityControl,
      listControl: this.listControl,
      dateControl: this.dateControl,
    });
    console.log(this.data.taskList);
  }

  addNewTask(): void {
    let newTask: Task = {
      name: this.taskName.value,
      list: this.listControl.value,
      priority: this.priorityControl.value,
      dateTime: this.dateControl.value,
      status: false,
    };

    console.log(newTask);
    console.log(this.addTaskForm.valid);

    if (this.addTaskForm.valid) {
      this.taskService.addTask(newTask).subscribe((task) => {
        this.data.taskList.unshift(task);
        this.dialog.closeAll();
      });
      this.dialog.closeAll();
    }
  }
}
