/* tslint:disable */
import { TagAnnonce } from './tag-annonce';
import { TagEtudiant } from './tag-etudiant';
export interface Tag {
  id?: number;
  nom?: string;
  groupe?: string;
  tagAnnonce?: Array<TagAnnonce>;
  tagEtudiant?: Array<TagEtudiant>;
}
