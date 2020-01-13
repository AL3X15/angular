import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilisateurService } from './service/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
	title = 'Jober';
	constructor(private userService : UtilisateurService){
	}

	estAdmin : boolean;
	estEntreprise : boolean;

	ngOnInit() {
		this.userService.estAdmin.subscribe(est => this.estAdmin = est);
		this.userService.estEnt.subscribe(est => this.estEntreprise = est);
	}

	ngOnDestroy(){
		this.userService.estAdmin.unsubscribe();
		this.userService.estEnt.unsubscribe();
	}
}
