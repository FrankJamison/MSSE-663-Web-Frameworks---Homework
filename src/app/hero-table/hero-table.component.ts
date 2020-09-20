import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare,
} from './components/directives/sortable-header.directive';
import { HeroesService } from '../services/hero.service';
import { Observable } from 'rxjs';
import { Hero } from './models/hero.model';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/models/application-state.model';
import { loadHeroes, getHeroes } from '../hero-table/store';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss'],
})
export class HeroTableComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  @ViewChildren(SortableHeaderDirective) headers: QueryList<
    SortableHeaderDirective
  >;

  constructor(
    private heroService: HeroesService,
    private store$: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.heroes$ = this.store$.select(getHeroes);
    this.store$.dispatch(loadHeroes());
  }
}