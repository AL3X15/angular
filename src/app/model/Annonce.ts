import { Tag } from './Tag';

export class Annonce{
	id : number;
	paye : number;
	dateDebut : Date;
	dateFin : Date;
	poste : string;
	tags : Array<Tag>;
	public Annonce(){
		this.tags = new Array<Tag>();
	}
}