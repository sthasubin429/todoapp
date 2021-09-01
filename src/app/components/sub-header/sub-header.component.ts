import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  constructor() {}
  @Output() openNewTask = new EventEmitter();

  date = new Date();

  ngOnInit(): void {}

  onClick() {
    this.openNewTask.emit();
  }
}
