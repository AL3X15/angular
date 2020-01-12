import { Component, OnInit, Input } from '@angular/core';
import { EntrepriseDTO } from '../api/models';

@Component({
	selector: 'app-affichage-entreprise',
	templateUrl: './affichage-entreprise.component.html',
	styleUrls: ['./affichage-entreprise.component.css']
})
export class AffichageEntrepriseComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@Input() entreprise : EntrepriseDTO

}
