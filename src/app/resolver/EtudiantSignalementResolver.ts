import { EtudiantResumeDTOPagedResult } from '../api/models';
import { Injectable } from '@angular/core';
import { EtudiantService } from '../api/services';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class EtudiantSignalementResolver implements Resolve<EtudiantResumeDTOPagedResult>{

	constructor(private service : EtudiantService){}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
		return this.service.getEtudiantSignalementLigne(1);
	}
}