import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrepriseDTO } from '../api/models';
import { EntrepriseService } from '../api/services';
import { UtilisateurService } from '../service/utilisateur.service';
import { EntrepriseModel } from '../model/EntrepriseModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-entreprise',
  templateUrl: './formulaire-entreprise.component.html',
  styleUrls: ['./formulaire-entreprise.component.css']
})
export class FormulaireEntrepriseComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private serviceEnt : EntrepriseService, private serviceUser : UtilisateurService, private router: Router) {
	}

  	ngOnInit() {
		this.entreprise = this.serviceUser.getEntreprise();

		if(this.entreprise === undefined)
			this.formulaireCreation();
		else
			this.formulaireModification();
	}

	entrepriseForm : FormGroup;
	entreprise : EntrepriseDTO;
	
	onSubmit(){
		let entrepriseNouv : EntrepriseModel = this.entrepriseForm.value;
		
		if(this.entreprise === undefined){
			if(entrepriseNouv.user.password == entrepriseNouv.user.confirmationPassword)
				this.serviceEnt.postEntreprise(entrepriseNouv).subscribe(
					x => this.serviceUser.setEntreprise(x),
					() => {},
					() => this.router.navigate(['acceuil'])
				);
			else		
				alert("il faut confirmer le mot de passe");
		}
		else{
			entrepriseNouv.user.nbSignalement = this.entreprise.user.nbSignalement;
			this.serviceEnt.putEntreprise(entrepriseNouv).subscribe(
				x => this.serviceUser.setEntreprise(x),
				() => {},
				() => this.router.navigate(['acceuil'])
			);
		}
	}

	formulaireCreation(){
		this.entrepriseForm = this.formBuilder.group({
			nomResponsable : ['', Validators.required],
			numeroBanqueCarrefourEts : ['', Validators.compose([Validators.required, Validators.pattern("[01]\\d{9}")])],
			adresse : this.formBuilder.group({
				rue : ['', Validators.required],
				numero : ['', Validators.required],
				localite : this.formBuilder.group({
					codePostal : ['', Validators.compose([Validators.required, Validators.pattern("\\d{4}")])],
					nom : ['', Validators.required]
				}),
			}),
			user : this.formBuilder.group({
				nom : ['', Validators.required],
				phoneNumber : ['', Validators.compose([Validators.required, Validators.pattern("0\\d{3}(\\d{2}){3}")])],
				email : ['', Validators.compose([Validators.required, Validators.pattern(".+@.+\..+")])],
				password : ['', Validators.required],
				confirmationPassword : ['', Validators.required],
			})
		}); 
	}

	formulaireModification(){
		this.entrepriseForm = this.formBuilder.group({
			nomResponsable : [this.entreprise.nomResponsable, Validators.required],
			numeroBanqueCarrefourEts : [this.entreprise.numeroBanqueCarrefourEts, Validators.compose([Validators.required, Validators.pattern("[01]\\d{9}")])],
			adresse : this.formBuilder.group({
				rue : [this.entreprise.adresse.rue, Validators.required],
				numero : [this.entreprise.adresse.numero, Validators.required],
				localite : this.formBuilder.group({
					codePostal : [this.entreprise.adresse.localite.codePostal, Validators.compose([Validators.required, Validators.pattern("\\d{4}")])],
					nom : [this.entreprise.adresse.localite.nom, Validators.required]
				}),
			}),
			user : this.formBuilder.group({
				nom : [this.entreprise.user.nom, Validators.required],
				phoneNumber : [this.entreprise.user.phoneNumber, Validators.compose([Validators.required, Validators.pattern("0\\d{3}(\\d{2}){3}")])],
				email : [this.entreprise.user.email, Validators.compose([Validators.required, Validators.pattern(".+@.+\..+")])],
			})
		}); 
	}

}
