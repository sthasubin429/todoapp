import { Injectable } from '@angular/core';
import { User, UserList } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUser(): User[] {
    return UserList;
  }
}
