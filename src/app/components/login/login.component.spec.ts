import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ThemePalette } from '@angular/material/core';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [{ provide: UsersService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have color theme to be `accent`', () => {
    let temp: ThemePalette = 'accent';
    expect(component.color).toBe(temp);
  });

  it('should have submit to be false', () => {
    expect(component.submit).toEqual(false);
  });

  it('should have showPassword to be false', () => {
    expect(component.showPassword).toEqual(false);
  });

  it('should toggle showPassword', () => {
    expect(component.showPassword).toEqual(false);
    component.showHidePassword();
    expect(component.showPassword).toEqual(true);
  });

  it('should define users', () => {
    expect(component.users).toBeDefined();
  });

  it('should display error message', () => {
    component.formSubmit();
    let test = de.queryAll(By.css('.invalid-text'));
    test.forEach((t) =>
      expect(t.nativeElement.innerText).toEqual(' Invalid Input ')
    );
  });

  it('should display error message on form submit', fakeAsync(() => {
    expect(component.submit).toEqual(false);
    expect(component.formValid).toEqual(false);

    component.submit = true;
    component.formValid = true;

    fixture.detectChanges();

    expect(component.submit).toEqual(true);
    expect(component.formValid).toEqual(true);
    //  expect(component.myForm.valid).toBeFalsy();

    let test = de.queryAll(By.css('.invalid-text'));
    let errors = [
      'Incorrect Password !',
      ' Invalid Input ',
      'Incorrect Email Address !',
      ' Invalid Input ',
    ];

    errors.forEach((error) => {
      expect(test.pop().nativeElement.innerText).toEqual(error);
    });
  }));

  it('shoud check when form is valid', fakeAsync(() => {
    expect(component.myForm.valid).toBeFalse();

    component.myForm.controls['email'].setValue('subin@hotmail.com');
    component.myForm.controls['password'].setValue('Password1');
    flush();
    fixture.detectChanges();
    expect(component.myForm.valid).toBeTrue();
    expect(component.myForm.invalid).toBeFalse();
  }));

  it('shoud check when form is invalid', fakeAsync(() => {
    expect(component.myForm.valid).toBeFalse();

    component.myForm.controls['email'].setValue('subin@hotmail');
    component.myForm.controls['password'].setValue('Password123');
    flush();
    fixture.detectChanges();
    expect(component.myForm.valid).toBeFalse();
    expect(component.myForm.invalid).toBeTrue();
  }));
});
