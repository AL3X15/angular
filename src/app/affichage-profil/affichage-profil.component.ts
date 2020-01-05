import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';
import { AdministrateurDTO, EntrepriseDTO } from '../api/models';
import { EntrepriseService, AdministrateurService } from '../api/services';

@Component({
	selector: 'app-affichage-profil',
	templateUrl: './affichage-profil.component.html',
	styleUrls: ['./affichage-profil.component.css']
})
export class AffichageProfilComponent implements OnInit {

	constructor(private serviceUser : UtilisateurService, private router: Router, private serviceEnt : EntrepriseService, private serviceAdmin : AdministrateurService) { }

	ngOnInit() {
		this.serviceUser.estAdmin.subscribe(x => this.estAdmin = x);
		this.serviceUser.estEnt.subscribe(x => this.estEntreprise = x);
		if(this.estAdmin)
			this.administrateur = this.serviceUser.getAdministrateur();
		else
			this.entreprise = this.serviceUser.getEntreprise();
	}

	entreprise : EntrepriseDTO;
	administrateur : AdministrateurDTO;
	estAdmin : boolean;
	estEntreprise : boolean;

	modifProfil(){
		if(this.estAdmin){
			this.serviceAdmin.getAdministrateur().subscribe(
				x => this.serviceUser.setAdministrateur(x),
				() => {},
				() => this.router.navigate(["administrateurForm"]));
		}else{
			this.serviceEnt.getEntreprise().subscribe(
				x => this.serviceUser.setEntreprise(x),
				() => {},
				() => this.router.navigate(["entrepriseForm"]));
		}
	}
}
