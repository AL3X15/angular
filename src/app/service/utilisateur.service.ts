import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtToken } from '../model/JwtToken';
import { JwtService } from '../api/services';

@Injectable({
	providedIn: 'root'
})
export class UtilisateurService {

	constructor() { }

	estAdmin = new BehaviorSubject<boolean>(false);
	estEntreprise = new BehaviorSubject<boolean>(false);
	estPremuim = new BehaviorSubject<boolean>(false);
	private token : JwtToken = {
		access_token : null,
		expires_in : null,
		estEtudiant : null,
		estAdministrateur : null,
		estEntreprise : null,
		estPremuim : null,
	};
 
	estAuthentifie() : boolean{
		return this.estAdmin.getValue() || this.estEntreprise.getValue();
	}

	getToken() : JwtToken{
		return this.token
	}
	setToken(token : JwtToken){
		if(token.estEtudiant){
			//TODO interdire les étudiants
		}
		//TODO récupérer les roles du token
		this.token = token;
		this.estAdmin.next(token.estAdministrateur);
		this.estEntreprise.next(token.estEntreprise);
		this.estPremuim.next(token.estPremuim);
		
	}

}
