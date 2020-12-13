import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";


export interface IUserEntity {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private id = 1;
  private users: IUserEntity[] = [];

  constructor() { }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  createUser(newUsername: string, newPassword: string): Observable<IUserEntity> {

    const newUser: IUserEntity = {id: this.id, username: newUsername, password: newPassword};
    if(this.users.find(u => u.username === newUsername)) {
      console.log("This user already exist!");
    } else {
      this.id = this.id + 1;
      this.users.push(newUser);
      console.log(newUser);
      return of(newUser);
    }
  }

  getUserById(idNumber: number): Observable<IUserEntity> {
    return of(this.users.find(u => u.id === idNumber));

  }

  editUser(editedUsername: string, editedPassword: string): Observable<IUserEntity> {
    const editedUser: IUserEntity = {id: this.id, username: editedUsername, password: editedPassword};
    this.users.push(editedUser);
    return of(editedUser);

  }

}
