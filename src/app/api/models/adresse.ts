/* tslint:disable */
import { Localite } from './localite';
import { Annonce } from './annonce';
import { Entreprise } from './entreprise';
import { Etudiant } from './etudiant';
export interface Adresse {
  id?: number;
  rue?: string;
  numero?: string;
  localiteId?: number;
  localite?: Localite;
  annonce?: Array<Annonce>;
  entreprise?: Array<Entreprise>;
  etudiant?: Array<Etudiant>;
}
