import { Ability } from './ability.model';
import { Sprites } from './sprites.model';
import { Type } from './type.model';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  sprites: Sprites;
  types: Type[];
}
