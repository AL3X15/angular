/* tslint:disable */
import { AnnonceResumeDTO } from './annonce-resume-dto';
export interface AnnonceResumeDTOPagedResult {
  totalCount?: number;
  pageSize?: number;
  pageIndex?: number;
  items?: Array<AnnonceResumeDTO>;
}
