import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '././ul/footer/footer.component';
import { HeaderComponent } from '././ul/header/header.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, FooterComponent, HeaderComponent]
})
export class HomeModule { }
