import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import {
  faExclamationCircle,
  faEnvelope,
  faLock,
  faTimes,
  faEye,
  faEyeSlash,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { CustomEmailValidator } from 'src/app/Validator/customEmailValidator.vaidator';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/user';

import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

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
  showPassword = false;
  loading = false;

  faExclamationCircle = faExclamationCircle;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faTimes = faTimes;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCheck = faCheck;

  users: User[] = [];

  color: ThemePalette = 'accent';

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [
        this.model.email,
        [
          Validators.required,
          //  Validators.email,
          CustomEmailValidator,
        ],
      ],
      password: [
        this.model.password,
        [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
        ],
      ],
    });

    this.usersService.getUser().subscribe((users) => (this.users = users));
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  //Use either FormSubmit or SubmitButton
  //Both gives same results through different process

  formSubmit(): void {
    this.loading = true;
    this.submit = true;
    setTimeout(this.checkValid.bind(this), 2000);

    console.log(this.model.email, this.model.password);
  }

  checkValid() {
    for (let user of this.users) {
      if (
        this.model.email === user.email &&
        this.model.password === user.password
      ) {
        this.formValid = false;
        this.loading = false;

        localStorage.setItem('loggedIn', 'True');
        this.router.navigateByUrl('dashboard');
        let loginData = {
          id: user.id,
          email: user.email,
          name: user.name,
          dob: user.dob,
          gender: user.gender,
          phone: user.phone,
        };
        localStorage.setItem('loginData', JSON.stringify(loginData));

        break;
      } else {
        this.formValid = true;
      }
    }
    this.loading = false;
    console.log('Use subin@hotmail.com : Password1');
  }

  submitButton(): void {
    console.log('Form Submitted');
    console.log(this.myForm.value);
  }
  showHidePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
