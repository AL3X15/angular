import { Component, OnInit } from '@angular/core';
import { EntrepriseService, AnnonceService } from '../api/services';
import { AnnonceResumeDTO } from '../api/models/annonce-resume-dto';
import { AnnonceResumeDTOPagedResult } from '../api/models/annonce-resume-dtopaged-result';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';

@Component({
	selector: 'app-postulation',
	templateUrl: './postulation.component.html',
	styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {

	constructor(private serviceAnnonce : AnnonceService, private route : ActivatedRoute, private service : AnnonceSelectioneeService, private router : Router) { }

	ngOnInit() {
		if(this.route.snapshot.data.page !== undefined){
			this.page = this.route.snapshot.data.page;
			this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize)
		}
	}

	suivant(){
		if(this.page.pageIndex+1 <= this.nbPages)
			this.serviceAnnonce.getAnnonceMesAnnoncesLigne(this.page.pageIndex+1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	precedent(){
		if(this.page.pageIndex-1 > 0)
			this.serviceAnnonce.getAnnonceMesAnnoncesLigne(this.page.pageIndex-1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	details(id : number){
		this.serviceAnnonce.getAnnonceId(id).subscribe(
			x => this.service.setAnnonce(x),
			() => {},
			() => this.router.navigate(["annonce"]));
	}

	page : AnnonceResumeDTOPagedResult;
	nbPages : number;
	

}
