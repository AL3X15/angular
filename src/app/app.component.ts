import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'smartcity';
/*	constructor(private userService : UserService){
		userService.estConnecte.subscribe(est => this.estConnecte = est);
	}
	estConnecte : boolean;*/
}
