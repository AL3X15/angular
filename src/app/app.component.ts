import { Component } from '@angular/core';
import { UtilisateurService } from './service/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'smartcity';
	constructor(private userService : UtilisateurService){
		userService.estAdmin.subscribe(est => this.estAdmin = est);
		userService.estEntreprise.subscribe(est => this.estEntreprise = est);
	}
	estAdmin : boolean;
	estEntreprise : boolean;
}
