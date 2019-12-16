/* tslint:disable */
import { Etudiant } from './etudiant';
import { Tag } from './tag';
export interface TagEtudiant {
  etudiantId?: number;
  tagId?: number;
  etudiant?: Etudiant;
  tag?: Tag;
}
