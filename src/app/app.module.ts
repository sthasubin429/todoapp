import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material/app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TodayTaskComponent } from './components/today-task/today-task.component';
import { ListNamesComponent } from './components/list-names/list-names.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EmailSentComponent } from './components/email-sent/email-sent.component';
import { NameInitialsPipe } from './pipes/name-initials.pipe';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ButtonComponent,
    DashboardComponent,
    NewTaskComponent,
    HeaderComponent,
    SubHeaderComponent,
    OverviewComponent,
    TodayTaskComponent,
    ListNamesComponent,
    NewListComponent,
    ResetPasswordComponent,
    SignupPageComponent,
    SignupComponent,
    SetPasswordComponent,
    ForgotPasswordComponent,
    EmailSentComponent,
    NameInitialsPipe,
  ],
  imports: [
    NzButtonModule,
    MDBBootstrapModule.forRoot(),
    NgxIntlTelInputModule,
    BrowserModule,
    AppMaterialModule,

    HttpClientModule,

    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
