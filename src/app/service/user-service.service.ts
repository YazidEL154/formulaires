import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: User[] = [{id: uuid() , nom: 'yaya', prenom: 'zazou', mdp:'123', email:'yaya@zazou@gmail.com' }];

  constructor() { }

  enregistrerUser(user: User)
  {
    user.id = uuid();
    this.users.push(user);
  }

}
