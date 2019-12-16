import { Entreprise } from '../api/models';
import { Adresse } from '../api/models/adresse';
import { AdresseModel } from './AdresseModel';
import { UserModel } from './UserModel';

export class EntrepriseModel implements Entreprise{
	id?: number;
	nomResponsable: string;
	numeroBanqueCarrefourEts: string;
	estPremium?: boolean;
	adresse: AdresseModel;
	verionLigne?: string;
	user:UserModel;
	public EntrepriseModel(){}
}