import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulaire-annonce',
  templateUrl: './formulaire-annonce.component.html',
  styleUrls: ['./formulaire-annonce.component.css']
})
export class FormulaireAnnonceComponent implements OnInit {
/*
	constructor(private formBuilder: FormBuilder, private serviceAnnonce : AnnonceService, private serviceTag : TagService) {
		if(this.selectedEnterpriseId != undefined && this.selectedAnnonceId != undefined){
			serviceAnnonce.get(this.selectedAnnonceId, this.selectedEnterpriseId).subscribe(
				an => this.annonce = an,
				() => console.log("error"),
				() => this.RemplissageForm() );
			this.estCréation = false;
		}
		this.AffectaionTags();
	
		this.annonceForm = this.formBuilder.group({
			poste : ['', Validators.required],
			dateDebut : ['', Validators.required],
			dateFin : ['', Validators.required],
			paye : ['', Validators.required],
			region : [''],
			langue : [''],
			secteur : [''],
		}); 
	}
*/
  	ngOnInit() {
	}/*
	estCréation : boolean = true;
	annonceForm : FormGroup;
	annonce : Annonce;
	selectedEnterpriseId : number;
	selectedAnnonceId : number;
	regions : Array<Tag>;
	langues : Array<Tag>;
	secteurs : Array<Tag>;
	
	onSubmit(){
		if(this.estCréation)
			this.serviceAnnonce.post(this.selectedEnterpriseId, this.annonceForm.value).subscribe();
		else
			this.serviceAnnonce.uptdate(this.selectedEnterpriseId, this.annonceForm.value, this.annonce).subscribe();
	}

	RemplissageForm(){
		
		this.annonceForm.setValue({
			poste :  this.annonce.poste,
			dateDebut :  this.annonce.dateDebut,
			dateFin :  this.annonce.dateFin,
			paye :  this.annonce.paye,
			region :  this.annonce.tags.find(tag => tag.groupe == "region"),
			langue :  this.annonce.tags.find(tag => tag.groupe == "langue"),
			secteur :  this.annonce.tags.find(tag => tag.groupe == "secteur"),
		});
	}

	AffectaionTags(){
		this.regions = new Array<Tag>();
		this.langues = new Array<Tag>();
		this.secteurs = new Array<Tag>();

		for(let tag of this.serviceTag.tags){
			switch (tag.groupe) {
				case "region":
					this.regions.push(tag);
					break;
				case "langue":
					this.langues.push(tag);
					break;
				case "secteur":
					this.secteurs.push(tag);
					break;
				default:
					break;
			}
		}
	}*/
}
