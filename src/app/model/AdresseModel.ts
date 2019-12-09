import { Adresse } from '../api/models/adresse';

export class AdresseModel implements Adresse{
	id?: number;	route: string;
	numero: string;
	codePostal: string;
	localite: string;
	public AdresseModel(){}

}