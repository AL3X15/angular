import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { JwtService, EntrepriseService } from '../api/services';
import { UtilisateurService } from '../service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
	
	constructor(private formBuilder: FormBuilder, private jwt : JwtService, private ent : EntrepriseService, private userService : UtilisateurService, private router: Router) { }
	
	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			UserName : ['', Validators.compose([Validators.required, Validators.pattern(".+@.+\..+")])],
			Password  : ['', Validators.required],
		}); 
		this.userService.estAdmin.subscribe(est => this.estAdmin = est);
		this.userService.estEnt.subscribe(est => this.estEntreprise = est);
	}

	estAdmin : boolean;
	estEntreprise : boolean;
	loginForm: FormGroup;

	onSubmit(){
		this.jwt.postJwt(this.loginForm.value).subscribe(
			x => this.userService.setToken(x),
			() => {},
			() => {
				if(this.estAdmin)
					this.router.navigate(['signalement']);
				else if(this.estEntreprise)
					this.router.navigate(['postulation']);
			});
	}
}
