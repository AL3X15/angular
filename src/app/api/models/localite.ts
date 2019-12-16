/* tslint:disable */
import { Adresse } from './adresse';
export interface Localite {
  id?: number;
  nom?: string;
  codePostal?: string;
  adresse?: Array<Adresse>;
}
