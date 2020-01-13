import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';
import { EntrepriseService, AdministrateurService } from '../api/services';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

	constructor(private userService : UtilisateurService, private router: Router, private serviceEnt : EntrepriseService, private serviceAdmin : AdministrateurService){}
	
	subscriptionAdmin: Subscription;
	subscriptionEnt: Subscription;
	estAdmin : boolean;
	estEntreprise : boolean;
	
	ngOnInit() {
		this.subscriptionAdmin = this.userService.estAdmin.subscribe(est => this.estAdmin = est);
		this.subscriptionEnt = this.userService.estEnt.subscribe(est => this.estEntreprise = est);
	}

	deconnexion(){
		this.userService.deconnexion();
		this.router.navigate(['acceuil']);
	}

	voirProfil(){
		if(this.estAdmin){
			this.serviceAdmin.getAdministrateur().subscribe(
				x => this.userService.setAdministrateur(x),
				() => {},
				() => this.router.navigate(["profil"]));
		}else{
			this.serviceEnt.getEntreprise().subscribe(
				x => this.userService.setEntreprise(x),
				() => {},
				() => this.router.navigate(["profil"]));
		}
	}

	ajoutAdmin(){
		this.userService.setAdministrateur(null);
		this.router.navigate(['administrateurForm']);
	}

	ngOnDestroy(){
		this.subscriptionEnt.unsubscribe();
		this.subscriptionAdmin.unsubscribe();
	}

}
