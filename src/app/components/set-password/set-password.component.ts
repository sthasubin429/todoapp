import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import {
  faLock,
  faEye,
  faEyeSlash,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

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

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    ContainsNumber,
    ContainsUppercase,
    ContainsLowercase,
    ContainsSpecialCharacter,
  ]);
  confirmPassword = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {}

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
      window.alert('Sign up Sucessful');
      console.log(this.setPasswordForm.value);
    } else {
      window.alert('Password  invalid');
      console.log(this.setPasswordForm.value);
    }
  }
}
