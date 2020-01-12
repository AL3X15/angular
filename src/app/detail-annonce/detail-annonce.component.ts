import { Component, OnInit } from '@angular/core';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';
import { AnnonceService, PostulationService } from '../api/services';
import { Router } from '@angular/router';
import { AnnonceDTO } from '../api/models';

@Component({
	selector: 'app-detail-annonce',
	templateUrl: './detail-annonce.component.html',
	styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {

	constructor(private serviceAnnonceSelectionnee : AnnonceSelectioneeService, private serviceAnnonce : AnnonceService, private router : Router, private postulationService : PostulationService){}

	ngOnInit(){
		this.annonce = this.serviceAnnonceSelectionnee.getAnnonce();
	}

	annonce : AnnonceDTO;

	supression(){
		this.serviceAnnonce.deleteAnnonceId(this.annonce.id).subscribe(
			() => {},
			() => {},
			() => this.router.navigate(["mesAnnonces"]));
	}

	postulations(){
		this.router.navigate(["postulations"]);
	}

}
