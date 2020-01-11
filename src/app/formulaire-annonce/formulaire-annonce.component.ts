import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AnnonceService } from '../api/services';
import { AnnonceDTO, GroupeTagDTO, TagDTO } from '../api/models';
import { TagsService } from '../service/tags.service';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulaire-annonce',
  templateUrl: './formulaire-annonce.component.html',
  styleUrls: ['./formulaire-annonce.component.css']
})
export class FormulaireAnnonceComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private serviceAnnonce : AnnonceService, private serviceTag : TagsService, private annonceSelectionnee : AnnonceSelectioneeService, private route : ActivatedRoute) {}

	ngOnInit(){
		this.formulaireCreation();
		if(this.serviceTag.getTags() === undefined)
			this.serviceTag.setTags(this.route.snapshot.data.tags);
		this.langues = this.serviceTag.getTags().find(x => x.nom == "langues");
		this.secteurs = this.serviceTag.getTags().find(x => x.nom == "secteurs");
	}
	
	langues : GroupeTagDTO;
	secteurs : GroupeTagDTO;
	annonceForm : FormGroup;

	onSubmit(){
		let annonceNouv = this.annonceForm.value;
		annonceNouv.tags = new Array<TagDTO>();
		annonceNouv.tags.push(this.langues.tags.find(x => x.nom == this.annonceForm.get("langue").value))
		annonceNouv.tags.push(this.secteurs.tags.find(x => x.nom == this.annonceForm.get("secteur").value))
		console.log(annonceNouv)
		this.serviceAnnonce.postAnnonce(this.annonceForm.value).subscribe();
	}


	formulaireCreation(){
		this.annonceForm = this.formBuilder.group({
			poste : ['', Validators.required],
			dateDebut : ['', Validators.required],
			dateFin : ['', Validators.required],
			paie : ['', Validators.required],
			adresse : this.formBuilder.group({
				rue : ['', Validators.required],
				numero : ['', Validators.required],
				localite : this.formBuilder.group({
					codePostal : ['', Validators.compose([Validators.required, Validators.pattern("\\d{4}")])],
					nom : ['', Validators.required]
				}),
			}),
			langue : ['', Validators.required],
			secteur : ['', Validators.required],
		}); 
	}

}
