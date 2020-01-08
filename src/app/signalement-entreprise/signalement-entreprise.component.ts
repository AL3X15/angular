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
		this.page = this.route.snapshot.data.page;
	}

	suivant(){
		if(this.page.pageIndex+1 < this.nbPage)
			this.serviceEnt.getEntrepriseSignalementPageLigne(this.page.pageIndex+1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPage = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	precedent(){
		if(this.page.pageIndex-1 > 0)
			this.serviceEnt.getEntrepriseSignalementPageLigne(this.page.pageIndex-1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPage = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	details(id : string){
		this.service.detailEntreprise(id);

	}

	page : EntrepriseResumeDTOPagedResult;
	nbPage : number;
}
