import { UserDTO } from '../api/models';

export class UserModel implements UserDTO {
    id: number;
    email: string;
    motDePasse: string;
    nom: string;
    numeroTelephone: string;
    public UserModel(){}
  }
  