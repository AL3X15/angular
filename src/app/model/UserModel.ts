import { UserDTO } from '../api/models';

export class UserModel implements UserDTO {
    id: string;
    email: string;
    motDePasse: string;
    nom: string;
    phoneNumber: string;
    public UserModel(){}
  }
  