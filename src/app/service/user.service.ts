import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  	constructor() { }
	estConnecte = new BehaviorSubject<boolean>(false);
	estAdmin = new BehaviorSubject<boolean>(false);
	estPremuim = new BehaviorSubject<boolean>(false);
}
