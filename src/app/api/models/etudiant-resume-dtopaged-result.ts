/* tslint:disable */
import { EtudiantResumeDTO } from './etudiant-resume-dto';
export interface EtudiantResumeDTOPagedResult {
  totalCount?: number;
  pageSize?: number;
  pageIndex?: number;
  items?: Array<EtudiantResumeDTO>;
}
