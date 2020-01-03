import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { JwtService, EntrepriseService } from '../api/services';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
	
	constructor(private formBuilder: FormBuilder, private jwt : JwtService, private service : UtilisateurService, private ent : EntrepriseService) { }
	
	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			UserName : ['', Validators.compose([Validators.required, Validators.pattern(".+@.+\..+")])],
			Password  : ['', Validators.required],
		}); 
	}
	
	loginForm: FormGroup;

	onSubmit(){
		this.jwt.postJwt(this.loginForm.value).subscribe(x => this.service.setToken(x));
	}
	test(){
		this.ent.getEntrepriseId(1).subscribe(x => alert(x));
	}
}
