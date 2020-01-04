import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../service/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseGuard implements CanActivate {
  
  constructor(private service: UtilisateurService, private router: Router) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.service.estEntreprise())
			return true;
		this.router.navigate(['acceuil']);
		return false;
	}
  
}
