import { HeroState } from './hero-state.model';

export const HERO_INITIAL_MOCK_STATE: HeroState = {
  hero: {
    id: 'heroId',
    name: 'Frendat Smeltfoot',
      race: 'Gnome: Deep (Svirfneblin)',
      class: 'Artificer',
      build: 'Alchemist'
  },
  loading: false,
  loaded: false,
};
