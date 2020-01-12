import { Component, OnInit, Input } from '@angular/core';
import { TagDTO } from '../api/models';

@Component({
	selector: 'app-affichage-tags',
	templateUrl: './affichage-tags.component.html',
	styleUrls: ['./affichage-tags.component.css']
})
export class AffichageTagsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@Input() tags : Array<TagDTO>;

}
