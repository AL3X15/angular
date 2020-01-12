import { Component, OnInit } from '@angular/core';
import { PostulationResumeDTOPagedResult, AnnonceDTO } from '../api/models';
import { PostulationService } from '../api/services';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';

@Component({
	selector: 'app-liste-postulation',
	templateUrl: './liste-postulation.component.html',
	styleUrls: ['./liste-postulation.component.css']
})
export class ListePostulationComponent implements OnInit {

	constructor(private servicePostulation : PostulationService, private route : ActivatedRoute, private service : AnnonceSelectioneeService, private router : Router) { }

	ngOnInit() {
		if(this.route.snapshot.data.page != undefined){
			this.annonce = this.service.getAnnonce();
			this.page = this.route.snapshot.data.page;
			this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize)
		}
	}

	suivant(){
		if(this.page.pageIndex+1 <= this.nbPages){
			if(this.annonce != null)
				this.servicePostulation.getPostulationIdLigne({"id" : this.annonce.id, "ligne" : this.page.pageIndex+1}).subscribe(
					x => this.page = x,
					() => {},
					() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
			else
			this.servicePostulation.getPostulationPostulationsLigne(this.page.pageIndex+1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));	
		}
	}

	precedent(){
		if(this.page.pageIndex-1 > 0){
			if(this.annonce != null)
				this.servicePostulation.getPostulationIdLigne({"id" : this.annonce.id, "ligne" : this.page.pageIndex-1}).subscribe(
					x => this.page = x,
					() => {},
					() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
			else
			this.servicePostulation.getPostulationPostulationsLigne(this.page.pageIndex-1).subscribe(
				x => this.page = x,
				() => {},
				() => this.nbPages = Math.ceil(this.page.totalCount  /  this.page.pageSize));
		}
	}

	details(id : number){
		this.servicePostulation.getPostulationId(id).subscribe(
			x => this.service.setPostulation(x),
			() => {},
			() => this.router.navigate(["postulation"]));
	}

	page : PostulationResumeDTOPagedResult;
	nbPages : number;
	annonce : AnnonceDTO;

}
