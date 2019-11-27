import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from '../model/Entreprise';
import { Adress } from '../model/Adress';
import { FormControl, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EntrepriseService } from '../service/entreprise.service';
import { isNull } from 'util';


@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.component.html',
  styleUrls: ['./inscription-entreprise.component.css']
})
export class InscriptionEntrepriseComponent implements OnInit {

  	constructor(private http : HttpClient, private formBuilder: FormBuilder, private serviceEnt : EntrepriseService) {
		//serviceEnt.get(this.selectedEnterprise.id).subscribe(ent =>  entreprise = ent);
		serviceEnt.get(1).subscribe(
			ent => this.entreprise = ent,
			() => console.log("error"),
			() => this.créationForm() 
		);

		this.entrepriseForm = this.formBuilder.group({
			nom : ['', Validators.required],
			numeroTelephone : ['', Validators.compose([Validators.required, Validators.pattern("0\\d{3}(\\d{2}){3}")])],
			email : ['', Validators.compose([Validators.required, Validators.email])],
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
	estCréation : boolean = false;
	entrepriseForm : FormGroup;
	entreprise : Entreprise;
	//@Input() selectedEnterprise : Entreprise;
	
	onSubmit(){
		if(this.estCréation)
			this.serviceEnt.post(this.entrepriseForm.value).subscribe();
		else
			this.serviceEnt.uptdate(this.entrepriseForm.value, this.entreprise).subscribe();
	}

	créationForm(){
		if(isNull(this.entreprise)){
			this.estCréation = true;
			this.entreprise = new Entreprise();
			this.entreprise.adresse = new Adress();
		}

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
