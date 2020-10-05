import { Hero } from '../models/hero.model';

export interface HeroesState {
  readonly heroes: Hero[];
  readonly loading?: boolean;
  readonly loaded?: boolean;
}
