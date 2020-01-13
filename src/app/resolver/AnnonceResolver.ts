import { AnnonceService } from '../api/services';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AnnonceResumeDTOPagedResult } from '../api/models/annonce-resume-dtopaged-result';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnnonceResolver implements Resolve<AnnonceResumeDTOPagedResult>{

	constructor(private service : AnnonceService){}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AnnonceResumeDTOPagedResult> {
		return this.service.getAnnonceMesAnnoncesLigne(1);
	}
}