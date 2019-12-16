/* tslint:disable */
import { Adresse } from './adresse';
import { User } from './user';
import { Annonce } from './annonce';
export interface Entreprise {
  id?: number;
  nomResponsable?: string;
  numeroBanqueCarrefourEts?: string;
  estPremium?: boolean;
  adresseId?: number;
  userId?: number;
  adresse?: Adresse;
  user?: User;
  annonce?: Array<Annonce>;
}
