import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HeroListModule } from '../hero-list/hero-list.module';
import { HeroListComponent } from '../hero-list/hero-list.component';

const components = [HomeComponent, HeroListComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, HeroListModule],
  exports: [...components],
})
export class HomeModule {}
