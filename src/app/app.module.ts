import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { FooterComponent } from './pages/ul/footer/footer.component';
import { HeaderComponent } from './pages/ul/header/header.component';
import { UiServiceService } from './pages/ul/ui-service.service';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot(),
  ],
  providers: [UiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
