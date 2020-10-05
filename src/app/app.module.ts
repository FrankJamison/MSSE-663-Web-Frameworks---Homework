import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxModule } from './ngrx.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HeaderModule } from './header/header.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgrxModule,
    LoginModule,
    RegisterModule,
    HeaderModule,
    HomeModule,
    NgbModule,
    PageNotFoundModule,
  //   RouterModule.forRoot([
  //     { path: 'login', component: LoginComponent },
  //     { path: 'register', component: RegisterComponent },
  //     { path: '', component: LandingComponent },
  //     { path: '**', redirectTo: '/' }
  //   ])
  ],
  // providers: [ HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
