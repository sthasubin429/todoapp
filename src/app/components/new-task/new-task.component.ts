import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  listControl = new FormControl('', Validators.required);
  lists: string[] = ['Personal', 'College', 'Work'];

  priorityControl = new FormControl('', Validators.required);
  priorities: string[] = ['High', 'Medium', 'Low'];

  color = '#fff';
  constructor() {}

  ngOnInit(): void {}
}
