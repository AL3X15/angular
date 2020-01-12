import { Component, OnInit } from '@angular/core';
import { SignalementService } from '../service/signalement.service';
import { EtudiantService } from '../api/services';
import { ActivatedRoute } from '@angular/router';
import { EtudiantResumeDTOPagedResult } from '../api/models';

@Component({
	selector: 'app-signalement-etudiant',
	templateUrl: './signalement-etudiant.component.html',
	styleUrls: ['./signalement-etudiant.component.css']
})
export class SignalementEtudiantComponent implements OnInit {

	constructor(private service : SignalementService, private serviceEtu : EtudiantService, private route: ActivatedRoute) { }

	ngOnInit() {
		if(this.route.snapshot.data.page !== undefined){
			this.page = this.route.snapshot.data.page;
			this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize)
		}
	}

	suivant(){
		if(this.page.pageIndex+1 < this.nbPages)
			this.serviceEtu.getEtudiantSignalementLigne(this.page.pageIndex+1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	precedent(){
		if(this.page.pageIndex-1 > 0)
			this.serviceEtu.getEtudiantSignalementLigne(this.page.pageIndex-1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
	}

	details(id : string){
		this.service.detailEtudiant(id);
	}

	page : EtudiantResumeDTOPagedResult;
	nbPages : number;

}
