/* tslint:disable */
import { EntrepriseDTO } from './entreprise-dto';
export interface EntrepriseDTOPagedResult {
  totalCount?: number;
  pageSize?: number;
  pageIndex?: number;
  items?: Array<EntrepriseDTO>;
}
