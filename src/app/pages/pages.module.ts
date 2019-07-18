import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from "./auth/auth.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { EmplyoeeModule } from './emplyoee/emplyoee.module';
import { PageNotFoundModule } from './pageNotFound/pageNotFound.module';
import { HomeComponent } from './home/home/home.component';
import { EmpComponent } from './emplyoee/emp/emp.component';
import { NewEmpComponent } from './emplyoee/new-emp/new-emp.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'new-emp', component: NewEmpComponent },
]



@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    ReactiveFormsModule,
    HomeModule,
    EmplyoeeModule,
    PageNotFoundModule,
    RouterModule.forChild(routes)
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
