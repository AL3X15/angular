import { PostulationService } from '../api/services';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';
import { Observable } from 'rxjs';
import { PostulationResumeDTOPagedResult } from '../api/models';

@Injectable({ providedIn: 'root' })
export class PostulationResolver implements Resolve<PostulationResumeDTOPagedResult>{

	constructor(private service : PostulationService, private serviceAnnonceSelectionnee : AnnonceSelectioneeService){}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        let annonce = this.serviceAnnonceSelectionnee.getAnnonce();
		if(annonce != null)
            return this.service.getPostulationIdLigne({"id" : annonce.id,"ligne": 1});
        return this.service.getPostulationPostulationsLigne(1);
	}
}