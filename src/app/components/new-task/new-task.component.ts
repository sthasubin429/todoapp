import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  addTaskForm!: FormGroup;

  listControl = new FormControl('', Validators.required);
  lists: string[] = ['Personal', 'College', 'Work'];

  priorityControl = new FormControl('', Validators.required);
  priorities: string[] = ['High', 'Medium', 'Low'];

  taskName = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      taskName: this.taskName,
      priorityControl: this.priorityControl,
      listControl: this.listControl,
      dateControl: this.dateControl,
    });
  }

  addNewTask(): void {
    console.log(
      this.taskName.value,
      this.listControl.value,
      this.priorityControl.value,
      this.dateControl.value
    );
  }
}
