
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';

const components = [HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forRoot([])],
  exports: [...components],
})
export class HeaderModule {}