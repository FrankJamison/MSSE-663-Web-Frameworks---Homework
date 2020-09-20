import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NgrxModule } from './ngrx.module';
import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgrxModule,
    LoginModule,
    HeaderModule,
    HomeModule,
    NgbModule,
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
