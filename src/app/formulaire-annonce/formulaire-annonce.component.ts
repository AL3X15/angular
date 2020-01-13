import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AnnonceService } from '../api/services';
import { AnnonceDTO, GroupeTagDTO, TagDTO } from '../api/models';
import { TagsService } from '../service/tags.service';
import { AnnonceSelectioneeService } from '../service/annonce-selectionee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../service/utilisateur.service';


@Component({
  selector: 'app-formulaire-annonce',
  templateUrl: './formulaire-annonce.component.html',
  styleUrls: ['./formulaire-annonce.component.css']
})
export class FormulaireAnnonceComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private serviceAnnonce : AnnonceService, private serviceTag : TagsService, private annonceSelectionnee : AnnonceSelectioneeService, private route : ActivatedRoute, private router : Router, private serviceUser : UtilisateurService) {}

	ngOnInit(){
		this.serviceUser.estPremuium.subscribe(x => this.estPremuium = x);
		this.formulaireCreation();
		if(this.serviceTag.getTags() === undefined)
			this.serviceTag.setTags(this.route.snapshot.data.tags);
		this.langues = this.serviceTag.getTags().find(x => x.nom == "langues");
		this.secteurs = this.serviceTag.getTags().find(x => x.nom == "secteurs");
		this.urgent = this.serviceTag.getTags().find(x => x.nom == "urgent");
	}
	
	langues : GroupeTagDTO;
	secteurs : GroupeTagDTO;
	urgent : GroupeTagDTO;
	annonceForm : FormGroup;
	estPremuium : boolean;

	onSubmit(){
		let annonceNouv : AnnonceDTO = this.annonceForm.value;
		if(annonceNouv.paie < 0)
			alert("la paie ne peux pas être négative");
		else if(new Date(annonceNouv.dateDebut) < new Date())
			alert("la date de début doit être supérieure à la date actuelle");
		else if(annonceNouv.dateDebut > annonceNouv.dateFin)
			alert("la date de début ne peut pas être supérieure à la date de fin");
		else{
			annonceNouv.tags = new Array<TagDTO>();
			annonceNouv.tags.push(this.langues.tags.find(x => x.nom == this.annonceForm.get("langue").value))
			annonceNouv.tags.push(this.secteurs.tags.find(x => x.nom == this.annonceForm.get("secteur").value))
			if(this.estPremuium && annonceNouv["estUrgent"])
				annonceNouv.tags.push(this.urgent.tags[0]);
			this.serviceAnnonce.postAnnonce(this.annonceForm.value).subscribe(
				() => {},
				() => {},
				() => this.router.navigate(["postulations"]));
		}
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
			estUrgent : ['']
		}); 
	}

}
