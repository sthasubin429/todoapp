import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

import {
  faLock,
  faEye,
  faEyeSlash,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/user';

import {
  MatchPassword,
  ContainsNumber,
  ContainsUppercase,
  ContainsLowercase,
  ContainsSpecialCharacter,
} from 'src/app/Validator/passwordValidators.vaidator';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  showPassword = false;
  showConfirmPassword = false;

  faLock = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  setPasswordForm: FormGroup;
  submit = false;
  signupData = {};

  loading = false;
  color: ThemePalette = 'accent';

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    ContainsNumber,
    ContainsUppercase,
    ContainsLowercase,
    ContainsSpecialCharacter,
  ]);
  confirmPassword = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setPasswordForm = this.formBuilder.group(
      {
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      { validators: MatchPassword }
    );
  }

  showHidePassword(): void {
    this.showPassword = !this.showPassword;
  }
  showHideConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  setPasswordSubmit(): void {
    this.submit = true;
    if (this.setPasswordForm.valid) {
      console.log(this.setPasswordForm.value);
      let signupObject: User = JSON.parse(localStorage.getItem('signupObject'));
      signupObject.password = this.password.value;
      console.log(signupObject);

      this.userService.addUser(signupObject).subscribe((res) => {
        console.log(res);
        let loginData = {
          id: res.id,
          email: res.email,
          name: res.name,
          dob: res.dob,
          gender: res.gender,
          phone: res.phone,
        };
        localStorage.setItem('loginData', JSON.stringify(loginData));
      });
      localStorage.setItem('loggedIn', 'True');
      localStorage.removeItem('signupObject');
      this.loading = true;
      setTimeout(this.navigate.bind(this), 2000);
    } else {
      console.log(this.setPasswordForm.value);
      window.alert('Password  invalid');
    }
  }

  navigate(): void {
    this.loading = false;
    this.router.navigateByUrl('dashboard');
  }
}
