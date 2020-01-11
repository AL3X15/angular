import { GroupeTagDTO } from '../api/models';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TagService } from '../api/services';
import { Observable } from 'rxjs';
import { TagsService } from '../service/tags.service';

@Injectable({ providedIn: 'root' })
export class TagsResolver implements Resolve<Array<GroupeTagDTO>>{

	constructor(private service : TagService, private tagsService : TagsService){}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
		if(this.tagsService.getTags() === undefined)
			return this.service.getTag();
	}
}