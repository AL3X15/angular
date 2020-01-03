
import { LocaliteDTO, AdresseDTO } from '../api/models';
import { LocaliteModel } from './LocaliteModel';

export class AdresseModel implements AdresseDTO{
	id?: number;	
	rue: string;
	numero: string;
	localite: LocaliteModel;
	public AdresseModel(){}

}