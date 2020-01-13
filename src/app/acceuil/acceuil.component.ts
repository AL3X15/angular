import { Component, OnInit, OnDestroy } from '@angular/core';
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
	
	constructor(private formBuilder: FormBuilder, private jwt : JwtService, private userService : UtilisateurService, private router: Router) { }
	
	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			UserName : ['', Validators.compose([Validators.required, Validators.pattern(".+@.+\..+")])],
			Password  : ['', Validators.required],
		}); 
	}

	loginForm: FormGroup;

	onSubmit(){
		document.getElementById("b")["disabled"]  = true;
		this.jwt.postJwt(this.loginForm.value).subscribe(
			x => this.userService.setToken(x),
			() => {},
			() => {
				if(this.userService.estAdministrateur())
					this.router.navigate(['signalement/etudiant']);
				else if(this.userService.estEntreprise())
					this.router.navigate(['postulations']);
			});
	}
}
