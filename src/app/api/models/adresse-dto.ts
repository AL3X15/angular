/* tslint:disable */
import { LocaliteDTO } from './localite-dto';
export interface AdresseDTO {
  id?: number;
  rue: string;
  numero: string;
  localite: LocaliteDTO;
}
