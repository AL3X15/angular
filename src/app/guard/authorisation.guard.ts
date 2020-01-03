import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../service/utilisateur.service';

@Injectable({
	providedIn: 'root'
})
export class AuthorisationGuard implements CanActivate {
	
	constructor(private service: UtilisateurService, private router: Router) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		alert(this.service.estAuthentifie());
		if (this.service.estAuthentifie())
			return true;
		this.router.navigate(['acceuil']);
		return false;
	}
	
}
