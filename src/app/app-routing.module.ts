import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/auth/login/login.component";
import { HomeComponent } from "./pages/home/home/home.component";
import {EmpComponent} from './pages/emplyoee/emp/emp.component';
import {PageNotFoundComponent} from './pages/pageNotFound/page-not-found/page-not-found.component';
import {NewEmpComponent} from './pages/emplyoee/new-emp/new-emp.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'new-emp', component: NewEmpComponent },
  { path: 'pageNoteFound', component: PageNotFoundComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: "**",
    redirectTo: "/pageNoteFound"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
