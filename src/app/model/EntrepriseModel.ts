import { EntrepriseDTO } from '../api/models';

import { AdresseModel } from './AdresseModel';
import { UserModel } from './UserModel';

export class EntrepriseModel implements EntrepriseDTO{
	id?: number;
	nomResponsable: string;
	numeroBanqueCarrefourEts: string;
	adresse: AdresseModel;
	verionLigne?: string;
	user:UserModel;
	public EntrepriseModel(){}
}