import { AuthState } from './models/auth-state.model';

export const AUTH_INITIAL_MOCK_STATE: AuthState = {
  isAuth: true,
  isTokenExpired: false,
  loading: false,
};
