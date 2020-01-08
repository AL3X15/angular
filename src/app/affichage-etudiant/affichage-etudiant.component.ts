import { Component, OnInit, Input } from '@angular/core';
import { EtudiantDTO } from '../api/models';

@Component({
	selector: 'app-affichage-etudiant',
	templateUrl: './affichage-etudiant.component.html',
	styleUrls: ['./affichage-etudiant.component.css']
})
export class AffichageEtudiantComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@Input() etudiant : EtudiantDTO;
}
