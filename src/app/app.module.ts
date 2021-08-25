import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
