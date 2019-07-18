import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/auth/login/login.component";
import { PageNotFoundComponent } from './pages/pageNotFound/page-not-found/page-not-found.component';
import { AuthGuard } from './core/gurds/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'page', loadChildren: 'src/app/pages/pages.module#PagesModule', canActivate: [AuthGuard] },
  { path: 'pageNoteFound', component: PageNotFoundComponent, canActivate: [AuthGuard] },
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
