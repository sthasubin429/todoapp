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

  faExclamationCircle = faExclamationCircle;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faTimes = faTimes;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCheck = faCheck;

  users: User[] = [];

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

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
    this.submit = true;
    for (let user of this.users) {
      if (
        this.model.email === user.email &&
        this.model.password === user.password
      ) {
        this.formValid = false;
        break;
      } else {
        this.formValid = true;
      }
    }

    console.log(this.model.email, this.model.password);
  }
  submitButton(): void {
    console.log('Form Submitted');
    console.log(this.myForm.value);
  }
  showHidePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      document.querySelector('#password').setAttribute('type', 'text');
    } else {
      document.querySelector('#password').setAttribute('type', 'password');
    }
  }
}
