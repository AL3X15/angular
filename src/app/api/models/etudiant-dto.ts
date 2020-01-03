/* tslint:disable */
import { AdresseDTO } from './adresse-dto';
import { TagDTO } from './tag-dto';
import { UserDTO } from './user-dto';
export interface EtudiantDTO {
  id?: number;
  prenom: string;
  sexe: string;
  dateNaissance: string;
  registreNational: string;
  expirationBadge: string;
  adresse: AdresseDTO;
  tags: Array<TagDTO>;
  user: UserDTO;
}
