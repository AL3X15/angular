/* tslint:disable */
import { Adresse } from './adresse';
export interface Entreprise {
  id?: number;
  nom: string;
  numeroTelephone: string;
  email: string;
  nomResponsable: string;
  numeroBanqueCarrefourEts: string;
  estPremium?: boolean;
  adresse: Adresse;
  verionLigne?: string;
}
