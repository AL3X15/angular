/* tslint:disable */
import { AdresseDTO } from './adresse-dto';
import { TagDTO } from './tag-dto';
export interface AnnonceDTO {
  id?: number;
  poste: string;
  dateDebut: string;
  dateFin: string;
  paie: number;
  adresse: AdresseDTO;
  tags: Array<TagDTO>;
}
