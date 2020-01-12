import { Injectable } from '@angular/core';
import { AnnonceDTO, PostulationDTO } from '../api/models';

@Injectable({
	providedIn: 'root'
})
export class AnnonceSelectioneeService {

	constructor() { }

	private annonce : AnnonceDTO;
	private postulation : PostulationDTO;

	setAnnonce(annonce : AnnonceDTO){
		this.annonce = annonce;
	}

	getAnnonce(){
		return this.annonce;
	}

	setPostulation(postulation : PostulationDTO){
		this.postulation = postulation;
	}

	getPostulation(){
		return this.postulation;
	}
}
