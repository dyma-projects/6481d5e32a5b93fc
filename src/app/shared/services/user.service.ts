import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUsers: string[] = [];
  public users: BehaviorSubject<string[]> = new BehaviorSubject(null);

  constructor() { }

  public addUser(user) {
    this.listUsers.push(user);
    this.users.next( this.listUsers);
  }
}
