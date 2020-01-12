/* tslint:disable */
import { AnnonceDTO } from './annonce-dto';
import { EtudiantDTO } from './etudiant-dto';
export interface PostulationDTO {
  id?: number;
  estAccepte?: boolean;
  annonce?: AnnonceDTO;
  etudiant?: EtudiantDTO;
}
