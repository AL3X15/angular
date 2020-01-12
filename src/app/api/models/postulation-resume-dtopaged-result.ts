/* tslint:disable */
import { PostulationResumeDTO } from './postulation-resume-dto';
export interface PostulationResumeDTOPagedResult {
  totalCount?: number;
  pageSize?: number;
  pageIndex?: number;
  items?: Array<PostulationResumeDTO>;
}
