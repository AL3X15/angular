import { Injectable } from '@angular/core';
import { Tag } from '../model/Tag';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {

 	constructor(private http : HttpClient) { 
		this.tags = new Array<Tag>();
		this.http.get("https://localhost:5001/Tag").subscribe(
			tag => this.tags.push(tag)
		);
	}
	tags : Array<Tag>;
}
