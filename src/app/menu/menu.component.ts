import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService : UtilisateurService){
  }
  
	estAdmin : boolean;
	estEntreprise : boolean;

  ngOnInit() {
    this.userService.estAdmin.subscribe(est => this.estAdmin = est);
		this.userService.estEntreprise.subscribe(est => this.estEntreprise = est);
  }

}
