import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const components = [LoginComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [...components],
})
export class LoginModule {}
