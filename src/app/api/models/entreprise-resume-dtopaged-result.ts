/* tslint:disable */
import { EntrepriseResumeDTO } from './entreprise-resume-dto';
export interface EntrepriseResumeDTOPagedResult {
  totalCount?: number;
  pageSize?: number;
  pageIndex?: number;
  items?: Array<EntrepriseResumeDTO>;
}
