import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private INITIAL_DATA: User[] = [
    {id: 1, name: 'Franco', surname: 'Carchedi', email: 'asd@asd.com', password: '123'},
    {id: 1, name: 'Franco', surname: 'Carchedi', email: 'asd@asd.com', password: '123'},
    {id: 1, name: 'Franco', surname: 'Carchedi', email: 'asd@asd.com', password: '123'},
  ]

  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.INITIAL_DATA);

  constructor() {}

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  addUser(user: User): void {
    const currentUsers = this.usersSubject.getValue();
    this.usersSubject.next([...currentUsers, user]);
  }

  // editUser(index: number, updatedUser: User): void {
  //   this.users[index] = updatedUser;
  // }

}
