import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrepriseDTO } from '../api/models';
import { EntrepriseModel } from '../model/EntrepriseModel';
import { AdresseModel } from '../model/AdresseModel';
import { EntrepriseService } from '../api/services';
import { UserModel } from '../model/UserModel';
import { LocaliteModel } from '../model/LocaliteModel';

@Component({
  selector: 'app-formulaire-entreprise',
  templateUrl: './formulaire-entreprise.component.html',
  styleUrls: ['./formulaire-entreprise.component.css']
})
export class FormulaireEntrepriseComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private serviceEnt : EntrepriseService) {
		if(this.selectedEnterpriseId != undefined){
			serviceEnt.getEntrepriseId(this.selectedEnterpriseId).subscribe(
				ent => this.entreprise = ent,
				() => console.log("error"),
				() => this.RemplissageForm() );
			this.estCréation = false;
		}
		this.entrepriseForm = this.formBuilder.group({
			nom : ['', Validators.required],
			numeroTelephone : ['', Validators.compose([Validators.required, Validators.pattern("0\\d{3}(\\d{2}){3}")])],
			email : ['', Validators.compose([Validators.required, Validators.pattern(".+@.+\..+")])],
			nomResponsable : ['', Validators.required],
			numeroBanqueCarrefourEts : ['', Validators.compose([Validators.required, Validators.pattern("[01]\\d{9}")])],
			adresse : this.formBuilder.group({
				route : ['', Validators.required],
				numero : ['', Validators.required],
				codePostal : ['', Validators.compose([Validators.required, Validators.pattern("\\d{4}")])],
				localite : ['', Validators.required]
			})		
		}); 
	}

  	ngOnInit() {
	}
	estCréation : boolean = true;
	entrepriseForm : FormGroup;
	entreprise : EntrepriseDTO;
	@Input() selectedEnterpriseId : number;
	
	onSubmit(){
		//TOOD conserver estPremium d'une entreprise déja existante
		this.entreprise = this.entrepriseForm.value;
		
		if(this.estCréation){
			this.entreprise.estPremium = false;
			this.serviceEnt.postEntreprise(this.entreprise).subscribe();

		}else{
			this.serviceEnt.putEntreprise(this.entreprise).subscribe();
		}
	}

	RemplissageForm(){
		this.entrepriseForm.setValue({
			nom : this.entreprise.user.nom,
			numeroTelephone : this.entreprise.user.phoneNumber,
			email : this.entreprise.user.email,
			nomResponsable : this.entreprise.nomResponsable,
			numeroBanqueCarrefourEts : this.entreprise.numeroBanqueCarrefourEts,
			adresse : {
				route : this.entreprise.adresse.rue,
				numero : this.entreprise.adresse.numero,
				codePostal : this.entreprise.adresse.localite.codePostal,
				localite : this.entreprise.adresse.localite.nom}});
	}

}
