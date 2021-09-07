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
import { SignupService } from 'src/app/services/signup.service';

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
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.setPasswordForm = this.formBuilder.group(
      {
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      { validators: MatchPassword }
    );
    this.signupService
      .getSignUpData()
      .subscribe((data) => (this.signupData = data));
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
      this.signupData['password'] = this.password.value;
      this.signupService.postSignUpData(this.signupData);
      console.log(this.signupData);
      window.alert('Sign up Sucessful');
    } else {
      console.log(this.setPasswordForm.value);
      window.alert('Password  invalid');
    }
  }
}
