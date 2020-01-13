import { Injectable } from '@angular/core';
import { EtudiantDTO, EntrepriseDTO, EtudiantResumeDTO } from '../api/models';
import { Router } from '@angular/router';
import { EtudiantService, EntrepriseService } from '../api/services';

@Injectable({
	providedIn: 'root'
})
export class SignalementService {

	constructor(private router : Router, private serviceEtu : EtudiantService, private serviceEnt : EntrepriseService) { }

	private etudiant : EtudiantDTO;
	private entreprise : EntrepriseDTO;

	detailEtudiant(id : string){
		this.entreprise = null;
		this.serviceEtu.getEtudiantId(id).subscribe(
			x => this.etudiant = x,
			() => {},
			() => this.router.navigate(["signalement/detail"])
		);
	}

	detailEntreprise(id : string){
		this.etudiant = null;
		this.serviceEnt.getEntrepriseId(id).subscribe(
			x => this.entreprise = x,
			() => {},
			() => this.router.navigate(["signalement/detail"])
		)
	}

	getEtudiant() : EtudiantDTO{
		return this.etudiant;
	}

	getEntreprise() : EntrepriseDTO{
		return this.entreprise;
	}
}
