import { Component, OnInit, Input } from '@angular/core';
import { AdresseDTO } from '../api/models';

@Component({
	selector: 'app-affichage-adresse',
	templateUrl: './affichage-adresse.component.html',
	styleUrls: ['./affichage-adresse.component.css']
})
export class AffichageAdresseComponent implements OnInit {

	constructor() { }

	ngOnInit() {}

	@Input() adresse : AdresseDTO

}
