import { Component, OnInit } from '@angular/core';
import { faUser, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { CustomEmailValidator } from 'src/app/Validator/customEmailValidator.vaidator';
import { PhoneValidator } from 'src/app/Validator/phoneValidators.validator';
import { Router, UrlSerializer } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  faUser = faUser;
  faTimesCircle = faTimesCircle;

  signUpForm: FormGroup;
  submit = false;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(/^[ a-zA-Z]+$/),
  ]);

  gender = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, CustomEmailValidator]);

  phone = new FormControl('', [Validators.required]);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private serializer: UrlSerializer,
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        name: this.name,
        gender: this.gender,
        dob: this.dob,
        email: this.email,
        phone: this.phone,
      },
      {
        validators: PhoneValidator,
      }
    );
  }

  signUpFormSubmit(): void {
    this.submit = true;

    console.log(this.signUpForm.value);
    console.log(this.signUpForm.valid);
    console.log(this.signUpForm);
    console.log(this.signUpForm.errors);

    if (this.signUpForm.valid) {
      localStorage.setItem(
        'signupObject',
        JSON.stringify(this.signUpForm.value)
      );

      this.router.navigateByUrl('signUp/setPassword');
    }
  }
}
