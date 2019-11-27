import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from '../model/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  	constructor(private http : HttpClient) { 
		
	}

  	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json'
	 	})
	};

	getAll() : Observable<Entreprise>{
		return this.http.get("https://localhost:5001/Enreprise");
	}

	get(id : number) : Observable<Entreprise>{
		return this.http.get(`https://localhost:5001/Enreprise/${id}`);
	}

  	post(entreprise : Entreprise) : Observable<Entreprise>{
		entreprise.numeroTelephone = parseInt(entreprise.numeroTelephone.toString());
		entreprise.numeroBanqueCarrefourEts = parseInt(entreprise.numeroBanqueCarrefourEts.toString());
		entreprise.adresse.codePostal = parseInt(entreprise.adresse.codePostal.toString());
		return this.http.post<Entreprise>("https://localhost:5001/Enreprise",entreprise,this.httpOptions);
	}
	  
	uptdate(entrepriseNew : Entreprise, entrepriseOld : Entreprise) : Observable<Entreprise>{
		entrepriseNew.estPremium = entrepriseOld.estPremium;
		entrepriseNew.id = entrepriseOld.id;
		return this.http.put("https://localhost:5001/Enreprise",entrepriseNew,this.httpOptions);
	}

	delete(id : number) : Observable<Entreprise>{
		return this.http.delete(`https://localhost:5001/Enreprise/${id}`);
	}
}
