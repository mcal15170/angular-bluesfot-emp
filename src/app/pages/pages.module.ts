import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from "./auth/auth.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';


@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    ReactiveFormsModule,
    HomeModule
  ],
  declarations: [

  ],
  exports: [
    AuthModule
  ]
})
export class PagesModule { }
