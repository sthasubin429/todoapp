import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'resetPassword',
    canActivate: [LoginGuard],
    component: ResetPasswordComponent,
  },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {
    path: 'signUp',
    component: SignupPageComponent,
    children: [
      { path: '', component: SignupComponent },
      { path: 'setPassword', component: SetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
