import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../api/services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordDTO } from '../api/models';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
	selector: 'app-formulaire-changelent-password',
	templateUrl: './formulaire-changelent-password.component.html',
	styleUrls: ['./formulaire-changelent-password.component.css']
})
export class FormulaireChangelentPasswordComponent implements OnInit {

	constructor(private service : PasswordService, private formBuilder: FormBuilder, private router: Router, private userService : UtilisateurService) { }

	ngOnInit() {
		this.passwordForm = this.formBuilder.group({
			ancienPassword : ['', Validators.required],
			password  : ['', Validators.required],
			confirmationPassword : ['', Validators.required]
		}); 
	}

	passwordForm : FormGroup;
	password : PasswordDTO;

	onSubmit(){
		document.getElementById("b")["disabled"]  = true;
		this.password = this.passwordForm.value;

		if(this.password.password === this.password.confirmationPassword)
			this.service.postPassword(this.password).subscribe(
				() => {},
				() => {},
				() => {
					this.userService.deconnexion();
					this.router.navigate(['acceuil']);
				});
		else		
			alert("il faut confirmer le mot de passe");	
			document.getElementById("b")["disabled"]  = false;
	}
}
