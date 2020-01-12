import { Component, OnInit, Input } from '@angular/core';
import { AnnonceDTO } from '../api/models';

@Component({
	selector: 'app-affichage-annonce',
	templateUrl: './affichage-annonce.component.html',
	styleUrls: ['./affichage-annonce.component.css']
})
export class AffichageAnnonceComponent implements OnInit {

	constructor(){}

	ngOnInit(){}

	@Input() annonce : AnnonceDTO;

}
