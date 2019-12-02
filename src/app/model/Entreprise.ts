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
	public Entreprise(){
		this.estPremium = false;
		this.id = 0; 
	}
}