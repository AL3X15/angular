import { Injectable } from '@angular/core';
import { TagService } from '../api/services';
import { GroupeTagDTO } from '../api/models';

@Injectable({
	providedIn: 'root'
})
export class TagsService {

	constructor() { }

	private tags : Array<GroupeTagDTO>;

	setTags(tags : Array<GroupeTagDTO>){
		this.tags = tags;
	}
	
	getTags() : Array<GroupeTagDTO>{
		return this.tags;
	}

}
