import { Component, OnInit } from '@angular/core';
import { AnnonceService, FaqService } from '../api/services';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnnonceResumeDTOPagedResult } from '../api/models/annonce-resume-dtopaged-result';

@Component({
	selector: 'app-liste-annonce',
	templateUrl: './liste-annonce.component.html',
	styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

	constructor(private serviceAnnonce : AnnonceService, private route : ActivatedRoute, private service : AnnonceSelectioneeService, private router : Router) { }

	ngOnInit() {
		if(this.route.snapshot.data.page !== undefined){
			this.page = this.route.snapshot.data.page;
			this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize)
		}
	}

	suivant(){
		document.getElementById("b2")["disabled"]  = true;
		if(this.page.pageIndex+1 <= this.nbPages)
			this.serviceAnnonce.getAnnonceMesAnnoncesLigne(this.page.pageIndex+1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
		document.getElementById("b2")["disabled"]  = false;
	}

	precedent(){
		document.getElementById("b1")["disabled"]  = true;
		if(this.page.pageIndex-1 > 0)
			this.serviceAnnonce.getAnnonceMesAnnoncesLigne(this.page.pageIndex-1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
		document.getElementById("b1")["disabled"]  = false;
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
