import { AuthState } from './models/auth-state.model';

export const AUTH_INITIAL_STATE: AuthState = {
  isAuth: false,
  isTokenExpired: true,
  loading: true
};
