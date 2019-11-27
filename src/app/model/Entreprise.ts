import { Adress } from './Adress';

export class Entreprise{
	id : number;
	nom : string;
	numeroTelephone : number;
	email : string;
	nomResponsable : string;
	numeroBanqueCarrefourEts : number;
	estPremium : boolean;
	adresse : Adress;
	/*public Entreprise(nom : string, numeroTelephone : number, email : string, nomResponsable : string, numeroBanqueCarrefourEts : number, estPremium : boolean,	adresse : Adress){
		this.nom = nom;
		this.numeroTelephone = numeroTelephone;
		this.email = email;
		this.nomResponsable = nomResponsable;
		this.numeroBanqueCarrefourEts = numeroBanqueCarrefourEts;
		this.estPremium = estPremium;
		this.adresse = adresse;
	}*/
	public Entreprise(){
		this.estPremium = false;
		this.id = 0; 
	}
}