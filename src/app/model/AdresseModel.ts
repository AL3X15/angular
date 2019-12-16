import { Adresse } from '../api/models/adresse';
import { LocaliteDTO } from '../api/models';
import { LocaliteModel } from './LocaliteModel';

export class AdresseModel implements Adresse{
	id?: number;	
	rue: string;
	numero: string;
	localite: LocaliteModel;
	public AdresseModel(){}

}