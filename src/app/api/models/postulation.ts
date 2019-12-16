/* tslint:disable */
import { Annonce } from './annonce';
import { Etudiant } from './etudiant';
export interface Postulation {
  etudiantId?: number;
  annonceId?: number;
  estAccepte?: boolean;
  annonce?: Annonce;
  etudiant?: Etudiant;
}
