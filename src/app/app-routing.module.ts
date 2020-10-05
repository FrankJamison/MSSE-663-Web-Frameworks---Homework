import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
import { HeroesGuard } from './hero-list/heroes.guard';

import { HeroDetailsComponent } from './hero-list/hero-details/hero-details.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path: 'heroes/:heroId',
    component: HeroDetailsComponent,
    canActivate: [HeroesGuard],
  },
  {
    path: 'heroes',
    component: HeroListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LandingComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
