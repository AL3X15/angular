import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from '../api/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';
import { AdministrateurDTO } from '../api/models';

@Component({
	selector: 'app-formulaire-administrateur',
	templateUrl: './formulaire-administrateur.component.html',
	styleUrls: ['./formulaire-administrateur.component.css']
})
export class FormulaireAdministrateurComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private serviceAdmin : AdministrateurService, private serviceUser : UtilisateurService, private router: Router) { }

	ngOnInit() {
		this.serviceUser.estAdmin.subscribe(est => this.estCreation = est);
		if(this.estCreation)
			this.formulaireCreation();
		else{
			this.administrateur = this.serviceUser.getAdministrateur();
			this.formulaireModification();
		}

	}
	
	estCreation : boolean;
	adminForm : FormGroup;
	administrateur : AdministrateurDTO;

	onSubmit(){
		let adminNouv : AdministrateurDTO = this.adminForm.value;
		
		if(this.administrateur === undefined){
			if(adminNouv.user.password == adminNouv.user.confirmationPassword)
				this.serviceAdmin.postAdministrateur(adminNouv).subscribe(
					x => this.serviceUser.setAdministrateur(x),
					() => {},
					() => this.router.navigate(['signalement'])
				);
			else		
				alert("il faut confirmer le mot de passe");
		}
		else{
			this.serviceAdmin.putAdministrateur(adminNouv).subscribe(
				x => this.serviceUser.setAdministrateur(x),
				() => {},
				() => this.router.navigate(['signalement'])
			);
		}
	}
	
	formulaireCreation(){
		this.adminForm = this.formBuilder.group({
			prenom : ['', Validators.required],
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
		this.adminForm = this.formBuilder.group({
			prenom : [this.administrateur.prenom, Validators.required],
			user : this.formBuilder.group({
				nom : [this.administrateur.user.nom, Validators.required],
				phoneNumber : [this.administrateur.user.phoneNumber, Validators.compose([Validators.required, Validators.pattern("0\\d{3}(\\d{2}){3}")])],
				email : [this.administrateur.user.email, Validators.compose([Validators.required, Validators.pattern(".+@.+\..+")])],
			})
		}); 
	}

}
