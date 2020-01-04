import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './service/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'smartcity';
	constructor(private userService : UtilisateurService){
	}

	estAdmin : boolean;
	estEntreprise : boolean;

	ngOnInit() {
		this.userService.estAdmin.subscribe(est => this.estAdmin = est);
		this.userService.estEntreprise.subscribe(est => this.estEntreprise = est);
	}
}
