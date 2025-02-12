import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtToken } from '../model/JwtToken';
import { AdministrateurService } from '../api/services';
import { AdministrateurDTO, EntrepriseDTO } from '../api/models';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class UtilisateurService {
	//TODO onDestroy
	constructor(private router : Router, private serviceAdmin : AdministrateurService) {
		this.resetToken()
	}

	private admin : AdministrateurDTO;
	private entreprise : EntrepriseDTO;
	estAdmin = new BehaviorSubject<boolean>(false);
	estEnt = new BehaviorSubject<boolean>(false);
	estPremuium = new BehaviorSubject<boolean>(false);
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
		let tokenDecode = atob(token.access_token.split('.')[1]);
		let role = JSON.parse(tokenDecode)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
		if(role == "etudiant"){
			alert("Interdit aux étudiants")
		}else{
			this.token = token;
			if(role == "entreprise")
				this.estEnt.next(true);
			if(role == "administrateur")
				this.estAdmin.next(true);
			this.estPremuium.next(token.estPremuium);
		}
	}

	getEntreprise() : EntrepriseDTO{
		return this.entreprise;
	}

	getAdministrateur() : AdministrateurDTO{
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
		this.estPremuium.next(false);
		this.router.navigate(['acceuil']);
	}

	resetToken(){
		this.token = {
			access_token : null,
			expires_in : null,
			estPremuium : null,
		};
	}

}
