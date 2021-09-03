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
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  showPassword = false;
  showConfirmPassword = false;

  faLock = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  resetPasswordForm: FormGroup;
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
    this.resetPasswordForm = this.formBuilder.group(
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
  resetPasswordSubmit(): void {
    this.submit = true;
    if (this.resetPasswordForm.valid) {
      window.alert('Password Reset Sucessful');
      console.log(this.resetPasswordForm.value);
    } else {
      window.alert('Password  invalid');
      console.log(this.resetPasswordForm.value);
    }
  }
}
