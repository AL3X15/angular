import { Injectable } from '@angular/core';
import { AnnonceDTO } from '../api/models';

@Injectable({
	providedIn: 'root'
})
export class AnnonceSelectioneeService {

	constructor() { }

	private annonce : AnnonceDTO;

	setAnnonce(annonce : AnnonceDTO){
		this.annonce = annonce;
	}

	getAnnonce(){
		return this.annonce;
	}
}
