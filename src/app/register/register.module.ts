import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LandingComponent } from '../landing/landing.component';

const components = [RegisterComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [...components],
})
export class RegisterModule {}
