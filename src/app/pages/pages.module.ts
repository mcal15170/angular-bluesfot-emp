import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from "./auth/auth.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { EmplyoeeModule } from './emplyoee/emplyoee.module';
import { PageNotFoundModule } from './pageNotFound/pageNotFound.module';



@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    ReactiveFormsModule,
    HomeModule,
    EmplyoeeModule,
    PageNotFoundModule,
  ],
  declarations: [

  ],
  exports: [
    AuthModule
  ]
})
export class PagesModule { }
