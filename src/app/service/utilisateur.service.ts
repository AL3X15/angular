import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtToken } from '../model/JwtToken';
import { JwtService, EntrepriseService, AdministrateurService } from '../api/services';
import { AdministrateurDTO, EntrepriseDTO } from '../api/models';

@Injectable({
	providedIn: 'root'
})
export class UtilisateurService {

	constructor(private serviceEnt : EntrepriseService, private serviceAdmin : AdministrateurService) { }

	private admin : AdministrateurDTO;
	private entreprise : EntrepriseDTO;
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
		return this.token;
	}
	setToken(token : JwtToken){
		if(token.estEtudiant){
			//TODO interdire les étudiants
		}else{
			//TODO récupérer les roles du token
			this.token = token;
			this.estAdmin.next(token.estAdministrateur);
			this.estEntreprise.next(token.estEntreprise);
			this.estPremuim.next(token.estPremuim);
		}
	}

	getEntreprise(){
		if(this.entreprise === undefined)
			this.serviceEnt.getEntreprise().subscribe(x => this.entreprise == x);
		return this.entreprise;
	}

	getAdministrateur(){
		if(this.admin === undefined)
			this.serviceAdmin.getAdministrateur().subscribe(x => this.admin == x);
		return this.admin;
	}

}
