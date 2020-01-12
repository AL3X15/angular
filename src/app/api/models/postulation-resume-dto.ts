/* tslint:disable */
import { AnnonceResumeDTO } from './annonce-resume-dto';
import { EtudiantResumeDTO } from './etudiant-resume-dto';
export interface PostulationResumeDTO {
  id?: number;
  estAccepte?: boolean;
  annonce?: AnnonceResumeDTO;
  etudiant?: EtudiantResumeDTO;
}
