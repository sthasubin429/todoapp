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
import { SignupService } from 'src/app/services/signup.service';
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
  date = new FormControl('', [Validators.required]);
  signUpEmail = new FormControl('', [
    Validators.required,
    CustomEmailValidator,
  ]);

  phone = new FormControl('', [Validators.required]);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private serializer: UrlSerializer,
    private signupService: SignupService
  ) {}
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        name: this.name,
        gender: this.gender,
        date: this.date,
        signUpEmail: this.signUpEmail,
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
      // const tree = this.router.createUrlTree(['signUp/setPassword'], {
      //   queryParams: this.signUpForm.value,
      // });
      // console.log(this.serializer.serialize(tree));
      this.signupService.setSignUpData(this.signUpForm.value);
      this.router.navigateByUrl('signUp/setPassword');
    }
  }
}
