import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignupComponent } from './user-signup.component';
// import { LoginComponent } from './user-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserSignupComponent,
//    UserLoginComponent
  ]
})
export class LoginModule { }
