import { Component, OnInit } from '@angular/core';
import { EntrepriseDTO, EtudiantDTO } from '../api/models';
import { EtudiantService, EntrepriseService } from '../api/services';
import { SignalementService } from '../service/signalement.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-affichage-signalement',
	templateUrl: './affichage-signalement.component.html',
	styleUrls: ['./affichage-signalement.component.css']
})
export class AffichageSignalementComponent implements OnInit {

	constructor(private serviceEtu : EtudiantService, private serviceEnt : EntrepriseService, private service : SignalementService, private router : Router) { }

	ngOnInit() {
		this.entreprise = this.service.getEntreprise();
		this.etudiant = this.service.getEtudiant();
	}
	
	entreprise : EntrepriseDTO;
	etudiant : EtudiantDTO;

	reset(){
		document.getElementById("b1")["disabled"]  = true;
		if(this.entreprise != undefined)
			this.serviceEnt.putEntrepriseId(this.entreprise.user.id).subscribe(
				() => {},
				() => {},
				() => this.router.navigate(["signalement/entreprise"]));
		else
			this.serviceEtu.putEtudiantId(this.etudiant.user.id).subscribe(
				() => {},
				() => {},
				() => this.router.navigate(["signalement/etudiant"]));
		document.getElementById("b1")["disabled"]  = true;
	}

	supprimer(){
		document.getElementById("b2")["disabled"]  = true;
		if(this.entreprise != undefined)
			this.serviceEnt.deleteEntrepriseId(this.entreprise.id).subscribe(
				() => {},
				() => {},
				() => this.router.navigate(["signalement/entreprise"]));
		else
			this.serviceEtu.deleteEtudiantId(this.etudiant.id).subscribe(
				() => {},
				() => {},
				() => this.router.navigate(["signalement/etudiant"]));
		document.getElementById("b2")["disabled"]  = true;
	}
}
