import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from '../api/services';

@Component({
	selector: 'app-signalement',
	templateUrl: './signalement.component.html',
	styleUrls: ['./signalement.component.css']
})
export class SignalementComponent implements OnInit {

	constructor(private service : AdministrateurService) { }

	ngOnInit() {
		
	}

}
