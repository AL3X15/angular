import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnrepriseService } from '../api/services';
import { Entreprise } from '../api/models';
import { EntrepriseModel } from '../model/EntrepriseModel';
import { AdresseModel } from '../model/AdresseModel';

@Component({
  selector: 'app-formulaire-entreprise',
  templateUrl: './formulaire-entreprise.component.html',
  styleUrls: ['./formulaire-entreprise.component.css']
})
export class FormulaireEntrepriseComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private serviceEnt : EnrepriseService) {
		if(this.selectedEnterpriseId != undefined){
			serviceEnt.getEnrepriseId(this.selectedEnterpriseId).subscribe(
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
	entreprise : Entreprise;
	@Input() selectedEnterpriseId : number;
	
	onSubmit(){
		//TOOD conserver estPremium d'une entreprise déja existante
		this.entreprise = this.entrepriseForm.value;
		if(this.estCréation){
			this.entreprise.estPremium = false;
			this.serviceEnt.postEnreprise(this.entreprise).subscribe();

		}else{
			this.serviceEnt.putEnreprise(this.entreprise).subscribe();
		}
	}

	RemplissageForm(){
		
		this.entrepriseForm.setValue({
			nom : this.entreprise.nom,
			numeroTelephone : this.entreprise.numeroTelephone,
			email : this.entreprise.email,
			nomResponsable : this.entreprise.nomResponsable,
			numeroBanqueCarrefourEts : this.entreprise.numeroBanqueCarrefourEts,
			adresse : {
				route : this.entreprise.adresse.route,
				numero : this.entreprise.adresse.numero,
				codePostal : this.entreprise.adresse.codePostal,
				localite : this.entreprise.adresse.localite}});
	}

	del(id : number){
		this.serviceEnt.deleteEnrepriseId(id).subscribe();
	}

	intit(){
		this.intit1()
		this.intit2()
	}
	intit1(){
		let e = new EntrepriseModel;
		e.id = 1;
		e.nom = "jean michel Test Enterprise";
		e.numeroTelephone =  "0498246521";
		e.email = "jmt@e.com";
		e.nomResponsable = "jmt";
		e.numeroBanqueCarrefourEts = "0555555555";
		e.estPremium = false;
		e.adresse = new AdresseModel();
		e.adresse.route = "route";
		e.adresse.numero = "2a"
		e.adresse.codePostal = "5555";
		e.adresse.localite = "loc";
		this.serviceEnt.postEnreprise(e).subscribe();
	}
	intit2(){
		let e = new EntrepriseModel();
		e.id = 2;
		e.nom = "jean michel Test junior Enterprise";
		e.numeroTelephone =  "0498246521";
		e.email = "jmt@e.com";
		e.nomResponsable = "jmt";
		e.numeroBanqueCarrefourEts = "0555555555";
		e.estPremium = false;
		e.adresse = new AdresseModel();
		e.adresse.route = "route";
		e.adresse.numero = "2a"
		e.adresse.codePostal = "5555";
		e.adresse.localite = "loc";
		this.serviceEnt.postEnreprise(e).subscribe();
	}

}
