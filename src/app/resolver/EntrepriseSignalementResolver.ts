import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, RouterModule } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { EntrepriseResumeDTOPagedResult } from '../api/models';
import { Observable } from 'rxjs';
import { EntrepriseService } from '../api/services';


@Injectable({ providedIn: 'root' })
export class EntrepriseSignalementResolver implements Resolve<EntrepriseResumeDTOPagedResult>{

	constructor(private service : EntrepriseService){}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
		return this.service.getEntrepriseSignalementLigne(1);
	}
}