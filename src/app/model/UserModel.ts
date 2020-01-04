import { UserDTO } from '../api/models';

export class UserModel implements UserDTO {
    id: string;
    email: string;
    motDePasse: string;
    nom: string;
    phoneNumber: string;
    nbSignalement : number;
    password : string;
    confirmationPassword : string;
    public UserModel(){}
  }
  