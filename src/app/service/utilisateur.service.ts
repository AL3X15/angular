import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtToken } from '../model/JwtToken';
import { JwtService, EntrepriseService, AdministrateurService } from '../api/services';
import { AdministrateurDTO, EntrepriseDTO } from '../api/models';

@Injectable({
	providedIn: 'root'
})
export class UtilisateurService {
	//TODO onDestroy
	constructor(private serviceEnt : EntrepriseService, private serviceAdmin : AdministrateurService) {
		this.resetToken()
	}

	private admin : AdministrateurDTO;
	private entreprise : EntrepriseDTO;
	estAdmin = new BehaviorSubject<boolean>(false);
	estEnt = new BehaviorSubject<boolean>(false);
	estPremuim = new BehaviorSubject<boolean>(false);
	private token : JwtToken;

	estAuthentifie() : boolean{
		return this.estAdmin.getValue() || this.estEnt.getValue();
	}

	estEntreprise() : boolean{
		return this.estEnt.getValue();
	}

	estAdministrateur() : boolean{
		return this.estAdmin.getValue();
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
			this.estEnt.next(token.estEntreprise);
			this.estPremuim.next(token.estPremuim);
		}
	}

	getEntreprise(){
		return this.entreprise;
	}

	getAdministrateur(){
		return this.admin;
	}

	setEntreprise(ent : EntrepriseDTO){
		this.entreprise = ent;
	}

	setAdministrateur(admin : AdministrateurDTO){
		this.admin = admin;
	}

	deconnexion() {
		this.resetToken();
		this.estAdmin.next(false);
		this.estEnt.next(false);
		this.estPremuim.next(false);
	}

	resetToken(){
		this.token = {
			access_token : null,
			expires_in : null,
			estEtudiant : null,
			estAdministrateur : null,
			estEntreprise : null,
			estPremuim : null,
		};
	}

}
