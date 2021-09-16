import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  newListForm!: FormGroup;
  submit = false;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private listService: ListsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  newListName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z ]*$'),
    Validators.minLength(3),
  ]);
  ngOnInit(): void {
    this.newListForm = this.fb.group({
      list: this.newListName,
    });
  }
  addNewList(): void {
    console.log(this.newListForm.status);
    if (this.newListForm.valid) {
      console.log(this.newListForm.value);
      this.listService.addListNames(this.newListForm.value);
      this.data.listNames.push(this.newListName.value);

      this.dialog.closeAll();

      window.alert('List Added');
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
