import { Component, OnInit, Input } from '@angular/core';
import { Adress } from '../model/Adress';
import { Entreprise } from '../model/Entreprise';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrepriseService } from '../service/entreprise.service';

@Component({
  selector: 'app-formulaire-entreprise',
  templateUrl: './formulaire-entreprise.component.html',
  styleUrls: ['./formulaire-entreprise.component.css']
})
export class FormulaireEntrepriseComponent implements OnInit {

	constructor(private formBuilder: FormBuilder, private serviceEnt : EntrepriseService) {
		if(this.selectedEnterpriseId != undefined){
			serviceEnt.get(this.selectedEnterpriseId).subscribe(
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
		if(this.estCréation)
			this.serviceEnt.post(this.entrepriseForm.value).subscribe();
		else
			this.serviceEnt.uptdate(this.entrepriseForm.value, this.entreprise).subscribe();
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
		this.serviceEnt.delete(id).subscribe();
	}

	intit(){
		this.intit1()
		this.intit2()
	}
	intit1(){
		let e = new Entreprise();
		e.id = 1;
		e.nom = "jean michel Test Enterprise";
		e.numeroTelephone =  parseInt("0498246521");
		e.email = "jmt@e.com";
		e.nomResponsable = "jmt";
		e.numeroBanqueCarrefourEts = parseInt("0555555555");
		e.estPremium = false;
		e.adresse = new Adress();
		e.adresse.route = "route";
		e.adresse.numero = "2a"
		e.adresse.codePostal = 5555;
		e.adresse.localite = "loc";
		this.serviceEnt.post(e).subscribe();
	}
	intit2(){
		let e = new Entreprise();
		e.id = 2;
		e.nom = "jean michel Test junior Enterprise";
		e.numeroTelephone =  parseInt("0498246521");
		e.email = "jmt@e.com";
		e.nomResponsable = "jmt";
		e.numeroBanqueCarrefourEts = parseInt("0555555555");
		e.estPremium = false;
		e.adresse = new Adress();
		e.adresse.route = "route";
		e.adresse.numero = "2a"
		e.adresse.codePostal = 5555;
		e.adresse.localite = "loc";
		this.serviceEnt.post(e).subscribe();
	}

}
