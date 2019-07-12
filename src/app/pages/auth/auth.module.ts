import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './login/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  providers: [AuthService],
})
export class AuthModule { }
