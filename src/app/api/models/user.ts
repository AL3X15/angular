/* tslint:disable */
import { Administrateur } from './administrateur';
import { Entreprise } from './entreprise';
import { Etudiant } from './etudiant';
export interface User {
  id?: number;
  nom?: string;
  email?: string;
  motDePasse?: string;
  numeroTelephone?: string;
  nbSignalement?: number;
  administrateur?: Array<Administrateur>;
  entreprise?: Array<Entreprise>;
  etudiant?: Array<Etudiant>;
}
