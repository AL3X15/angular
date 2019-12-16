/* tslint:disable */
import { Adresse } from './adresse';
import { User } from './user';
import { Postulation } from './postulation';
import { TagEtudiant } from './tag-etudiant';
export interface Etudiant {
  versionLigne?: string;
  id?: number;
  sexe?: string;
  dateNaissance?: string;
  registreNational?: string;
  expirationBadge?: string;
  prenom?: string;
  adresseId?: number;
  userId?: number;
  adresse?: Adresse;
  user?: User;
  postulation?: Array<Postulation>;
  tagEtudiant?: Array<TagEtudiant>;
}
