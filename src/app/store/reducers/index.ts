import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { heroesReducer} from '../../hero-list/store/reducers/heroes.reducer'
import { routerReducer } from '@ngrx/router-store';
import { heroReducer } from 'src/app/hero-list/store';

export const appState: ActionReducerMap<ApplicationState> = {
  router: routerReducer, 
  authState: authReducer,
  userState: userReducer,
  heroesState: heroesReducer,
  selectedHero: heroReducer
};
