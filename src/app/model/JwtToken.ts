export interface JwtToken{
    access_token : string;
    expires_in : number;
    estEntreprise : boolean;
	estEtudiant : boolean;
	estAdministrateur : boolean;
	estPremuim : boolean;
}