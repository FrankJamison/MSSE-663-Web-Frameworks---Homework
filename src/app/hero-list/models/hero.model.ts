import { HeroResponse } from 'src/app/services/hero-response.model';

export interface Hero extends HeroResponse {
  id: string;
}