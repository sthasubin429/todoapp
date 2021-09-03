import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  newListForm!: FormGroup;
  submit = false;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  newListName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z ]*$'),
    Validators.minLength(3),
  ]);
  ngOnInit(): void {
    this.newListForm = this.fb.group({
      listName: this.newListName,
    });
  }
  addNewList(): void {
    console.log(this.newListForm.status);
    if (this.newListForm.valid) {
      console.log(this.newListName.value);
      //Todo Add new list anem in the list
      this.dialog.closeAll();
    } else {
      this.submit = true;
    }
  }
  getErrorMessage() {
    if (this.newListName.hasError('required')) {
      return 'You must enter a value';
    } else if (this.newListName.hasError('pattern')) {
      return 'List name must only contain text';
    }
    return this.newListName.hasError('minLength')
      ? ''
      : 'Required atleast 3 characters';
  }
}
