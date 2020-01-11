import { Component, OnInit } from '@angular/core';
import { SignalementService } from '../service/signalement.service';
import { EntrepriseResumeDTOPagedResult } from '../api/models';
import { EntrepriseService } from '../api/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-signalement-entreprise',
	templateUrl: './signalement-entreprise.component.html',
	styleUrls: ['./signalement-entreprise.component.css']
})
export class SignalementEntrepriseComponent implements OnInit {

	constructor(private service : SignalementService, private serviceEnt : EntrepriseService, private route: ActivatedRoute) { }

	ngOnInit() {
		if(this.route.snapshot.data.page !== undefined){
			this.page = this.route.snapshot.data.page;
			this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize)
		}
	}

	suivant(){
		if(this.page.pageIndex+1 <= this.nbPages)
			this.serviceEnt.getEntrepriseSignalementLigne(this.page.pageIndex+1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	precedent(){
		if(this.page.pageIndex-1 > 0)
			this.serviceEnt.getEntrepriseSignalementLigne(this.page.pageIndex-1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	details(id : string){
		this.service.detailEntreprise(id);
	}

	page : EntrepriseResumeDTOPagedResult;
	nbPages : number;
}