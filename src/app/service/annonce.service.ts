import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Annonce } from '../model/Annonce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http : HttpClient) { }

  	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json'
		})
	};

	getAll(entrepriseId : number) : Observable<Annonce>{
		return this.http.get(`https://localhost:5001/Annonce/${entrepriseId}`);
	}

	get(entrepriseId : number, annonceId : number) : Observable<Annonce>{
		return this.http.get(`https://localhost:5001/Annonce/${entrepriseId}/${annonceId}`);
	}

  	post(entrepriseId : number, annonce : Annonce) : Observable<Annonce>{	
		return this.http.post<Annonce>(`https://localhost:5001/Annonce/${entrepriseId}`,annonce,this.httpOptions);
	}
	  
	uptdate(entrepriseId : number, annonceNew : Annonce, annonceOld : Annonce) : Observable<Annonce>{
		
		return this.http.put(`https://localhost:5001/Annonce/${entrepriseId}`,annonceNew,this.httpOptions);
	}

	delete(entrepriseId : number, annonceId : number) : Observable<Annonce>{
		return this.http.delete(`https://localhost:5001/Annonce/${entrepriseId}/${annonceId}`);
	}
}
