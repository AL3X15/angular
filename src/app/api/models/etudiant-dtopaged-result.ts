/* tslint:disable */
import { EtudiantDTO } from './etudiant-dto';
export interface EtudiantDTOPagedResult {
  totalCount?: number;
  pageSize?: number;
  pageIndex?: number;
  items?: Array<EtudiantDTO>;
}
