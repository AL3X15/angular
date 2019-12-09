import { Entreprise } from '../api/models';
import { Adresse } from '../api/models/adresse';

export class EntrepriseModel implements Entreprise{
	id?: number;
	nom: string;
	numeroTelephone: string;
	email: string;
	nomResponsable: string;
	numeroBanqueCarrefourEts: string;
	estPremium?: boolean;
	adresse: Adresse;
	verionLigne?: string;
	public EntrepriseModel(){}
}