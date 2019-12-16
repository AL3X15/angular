/* tslint:disable */
import { Annonce } from './annonce';
import { Tag } from './tag';
export interface TagAnnonce {
  annonceId?: number;
  tagId?: number;
  annonce?: Annonce;
  tag?: Tag;
}
