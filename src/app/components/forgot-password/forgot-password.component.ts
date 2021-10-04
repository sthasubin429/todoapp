import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {
  faEnvelope,
  faTimesCircle,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { CustomEmailValidator } from 'src/app/Validator/customEmailValidator.vaidator';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/user';
import { MatDialog } from '@angular/material/dialog';
import { EmailSentComponent } from '../email-sent/email-sent.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  faEnvelope = faEnvelope;
  faTimesCircle = faTimesCircle;
  faCheck = faCheck;
  faTimes = faTimes;

  forgotPasswordForm: FormGroup;
  submit = false;

  forgotPasswordEmail = new FormControl('', [
    Validators.required,
    CustomEmailValidator,
  ]);

  emailVaid = false;

  userData: User[];
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      forgotPasswordEmail: this.forgotPasswordEmail,
    });

    this.usersService.getUser().subscribe((user) => (this.userData = user));
  }

  forgotPasswordSubmit(): void {
    this.submit = true;

    if (this.forgotPasswordForm.valid) {
      for (let user of this.userData) {
        if (user.email === this.forgotPasswordEmail.value) {
          console.log('match');
          this.emailVaid = true;
          this.dialog.open(EmailSentComponent, {
            width: '388px',
          });
        }
      }
      if (!this.emailVaid) {
        console.log('use email: subin@hotmail.com');
      }
    }
  }
}
