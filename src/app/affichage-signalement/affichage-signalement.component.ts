import { Component, OnInit } from '@angular/core';
import { EntrepriseDTO, EtudiantDTO } from '../api/models';
import { EtudiantService, EntrepriseService } from '../api/services';
import { SignalementService } from '../service/signalement.service';

@Component({
	selector: 'app-affichage-signalement',
	templateUrl: './affichage-signalement.component.html',
	styleUrls: ['./affichage-signalement.component.css']
})
export class AffichageSignalementComponent implements OnInit {

	constructor(private serviceEtu : EtudiantService, private serviceEnt : EntrepriseService, private service : SignalementService) { }

	ngOnInit() {
		this.entreprise = this.service.getEntreprise();
		this.etudiant = this.service.getEtudiant();
	}
	
	entreprise : EntrepriseDTO;
	etudiant : EtudiantDTO;
}
