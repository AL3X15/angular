import { Component, OnInit } from '@angular/core';
import { SignalementService } from '../service/signalement.service';
import { EtudiantService } from '../api/services';
import { ActivatedRoute } from '@angular/router';
import { EtudiantDTOPagedResult, EtudiantResumeDTOPagedResult } from '../api/models';

@Component({
	selector: 'app-signalement-etudiant',
	templateUrl: './signalement-etudiant.component.html',
	styleUrls: ['./signalement-etudiant.component.css']
})
export class SignalementEtudiantComponent implements OnInit {

	constructor(private service : SignalementService, private serviceEtu : EtudiantService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.page = this.route.snapshot.data.page;
	}

	suivant(){
		if(this.page.pageIndex+1 < this.nbPage)
			this.serviceEtu.getEtudiantSignalementPageLigne(this.page.pageIndex+1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPage = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	precedent(){
		if(this.page.pageIndex-1 > 0)
			this.serviceEtu.getEtudiantSignalementPageLigne(this.page.pageIndex-1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPage = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	details(id : string){
		this.service.detailEntreprise(id);

	}

	page : EtudiantResumeDTOPagedResult;
	nbPage : number;

}
