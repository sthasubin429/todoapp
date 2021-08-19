import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  model = new Login('', '');

  submit = false;
  formValid = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [this.model.email, [Validators.required, Validators.email]],
      password: [
        this.model.password,
        [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
        ],
      ],
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  formSubmit(): void {
    this.submit = true;
    if (
      (this.model.email === 'subin@gmail.com',
      this.model.password === 'Subin123k')
    ) {
      this.formValid = false;
    } else {
      this.formValid = true;
    }
    console.log(this.model.email, this.model.password);
  }
}
