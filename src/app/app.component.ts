import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilisateurService } from './service/utilisateur.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
	title = 'Jober';
	constructor(private userService : UtilisateurService){}

	estAdmin : boolean;
	estEntreprise : boolean;
	subscriptionAdmin: Subscription;
	subscriptionEnt: Subscription;

	ngOnInit() {
		this.userService.estAdmin.subscribe(est => this.estAdmin = est);
		this.userService.estEnt.subscribe(est => this.estEntreprise = est);
	}

	ngOnDestroy(){
		this.subscriptionEnt.unsubscribe();
		this.subscriptionAdmin.unsubscribe();
	}
}
