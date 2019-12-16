/* tslint:disable */
import { Adresse } from './adresse';
import { Entreprise } from './entreprise';
import { Postulation } from './postulation';
import { TagAnnonce } from './tag-annonce';
export interface Annonce {
  entrepriseId?: number;
  id?: number;
  dateDebut?: string;
  dateFin?: string;
  paie?: number;
  adresseId?: number;
  poste?: string;
  versionLigne?: string;
  adresse?: Adresse;
  entreprise?: Entreprise;
  postulation?: Array<Postulation>;
  tagAnnonce?: Array<TagAnnonce>;
}
