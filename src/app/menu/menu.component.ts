import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	constructor(private userService : UtilisateurService, private router: Router){
	}
	
	estAdmin : boolean;
	estEntreprise : boolean;
	
	ngOnInit() {
		this.userService.estAdmin.subscribe(est => this.estAdmin = est);
		this.userService.estEnt.subscribe(est => this.estEntreprise = est);
	}

	deconnexion(){
		this.userService.deconnexion();
		this.router.navigate(['acceuil']);
	}

	formulaireAdmin(estCreation : boolean){
		this.userService.creationAdmin.next(estCreation);
		this.router.navigate(['administrateur']);
	}

}
