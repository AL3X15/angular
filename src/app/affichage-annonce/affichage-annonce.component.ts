import { Component, OnInit } from '@angular/core';
import { AnnonceResumeDTOPagedResult } from '../api/models/annonce-resume-dtopaged-result';
import { AnnonceService } from '../api/services';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnnonceDTO } from '../api/models';

@Component({
	selector: 'app-affichage-annonce',
	templateUrl: './affichage-annonce.component.html',
	styleUrls: ['./affichage-annonce.component.css']
})
export class AffichageAnnonceComponent implements OnInit {

	constructor(private serviceAnnonceSelectionnee : AnnonceSelectioneeService, private serviceAnnonce : AnnonceService, private router : Router){}

	ngOnInit(){
		this.annonce = this.serviceAnnonceSelectionnee.getAnnonce();
		console.log(this.annonce)
	}

	annonce : AnnonceDTO;

	supression(){
		this.serviceAnnonce.deleteAnnonceId(this.annonce.id).subscribe(
			() => {},
			() => {},
			() => this.router.navigate(["mesAnnonces"]));
	}

}
