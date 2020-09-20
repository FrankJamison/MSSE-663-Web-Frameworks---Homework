import { HeroesState } from './store/heroes-state.model';
import { HEROES_INITIAL_MOCK_STATE } from './store/heroes-initial-mock-state';
import { loadHero } from './store';
import { heroesReducer } from './store/reducers/heroes.reducer';
import { state } from '@angular/animations';

describe('HeroTableComponent', () => {
  it('should display a list of heroes', () => {
    const action = loadHero();
    const expected: HeroesState = {
      ...HEROES_INITIAL_MOCK_STATE,
      heroes: HEROES_INITIAL_MOCK_STATE.heroes,
      // loading: false,
    };
    const actual = heroesReducer(HEROES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(jasmine.objectContaining({
      heroes: jasmine.arrayContaining([
        jasmine.objectContaining({
          name: 'Frendat Smeltfoot',
          race: 'Gnome: Deep (Svirfneblin)',
          class: 'Artificer',
          build: 'Alchemist'
        })
      ])
    }));
  });
});