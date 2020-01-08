/* tslint:disable */
import { AdresseDTO } from './adresse-dto';
import { UserDTO } from './user-dto';
export interface EntrepriseDTO {
  id?: number;
  nomResponsable: string;
  numeroBanqueCarrefourEts: string;
  adresse: AdresseDTO;
  user: UserDTO;
}
