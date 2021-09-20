import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ThemePalette } from '@angular/material/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
});
