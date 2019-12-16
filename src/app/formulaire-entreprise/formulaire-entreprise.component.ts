import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Entreprise, EntrepriseDTO } from '../api/models';
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
			numeroTelephone : this.entreprise.user.numeroTelephone,
			email : this.entreprise.user.email,
			nomResponsable : this.entreprise.nomResponsable,
			numeroBanqueCarrefourEts : this.entreprise.numeroBanqueCarrefourEts,
			adresse : {
				route : this.entreprise.adresse.rue,
				numero : this.entreprise.adresse.numero,
				codePostal : this.entreprise.adresse.localite.codePostal,
				localite : this.entreprise.adresse.localite.nom}});
	}

	del(id : number){
		this.serviceEnt.deleteEntrepriseId(id).subscribe();
	}

	intit(){
		this.intit1()
		this.intit2()
	}
	intit1(){
		let e = new EntrepriseModel;
		e.user = new UserModel();
		e.user.nom = "jean michel Test Enterprise";
		e.user.motDePasse="test";
		e.user.numeroTelephone =  "0498246521";
		e.user.email = "jmtcjj@e.com";
		e.nomResponsable = "jmt";
		e.numeroBanqueCarrefourEts = "0555555555";
		e.estPremium = false;
		e.adresse = new AdresseModel();
		e.adresse.rue = "route";
		e.adresse.numero = "2a";
		e.adresse.localite = new LocaliteModel();
		e.adresse.localite.codePostal = "1000";
		e.adresse.localite.nom = "localite";
		this.serviceEnt.postEntreprise(e).subscribe();
	}
	intit2(){
		let e = new EntrepriseModel();
		e.user = new UserModel();
		e.user.nom = "jean michel Test junior Enterprise";
		e.user.numeroTelephone =  "0498246521";
		e.user.motDePasse="test";
		e.user.email = "jmtcj@e.com";
		e.nomResponsable = "jmt";
		e.numeroBanqueCarrefourEts = "0555555555";
		e.estPremium = false;
		e.adresse = new AdresseModel();
		e.adresse.rue = "route";
		e.adresse.numero = "2a"
		e.adresse.localite = new LocaliteModel();
		e.adresse.localite.codePostal = "1000";
		e.adresse.localite.nom = "localite";
		this.serviceEnt.postEntreprise(e).subscribe();
	}

}
