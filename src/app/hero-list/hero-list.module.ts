import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';
import { RouterModule } from '@angular/router';

const components = [HeroDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, SortableHeaderModule],
  exports: [...components],
})
export class HeroListModule {}
