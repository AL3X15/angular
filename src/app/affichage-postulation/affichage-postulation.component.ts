import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';
import { PostulationDTO } from '../api/models';
import { PostulationService } from '../api/services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-affichage-postulation',
	templateUrl: './affichage-postulation.component.html',
	styleUrls: ['./affichage-postulation.component.css']
})
export class AffichagePostulationComponent implements OnInit {

	constructor(private service : AnnonceSelectioneeService, private servicePostulation : PostulationService, private router : Router) {}

	ngOnInit() {
		this.postulation = this.service.getPostulation();
	}

	postulation : PostulationDTO;

	changerEtat(){
		this.servicePostulation.putPostulationId(this.postulation.id).subscribe(
			() => {},
			() => {},
			() => this.router.navigate(["postulations"]));
	}

	refuser(){
		this.servicePostulation.deletePostulationId(this.postulation.id).subscribe(
			() => {},
			() => {},
			() => this.router.navigate(["postulations"]));
	}

}
