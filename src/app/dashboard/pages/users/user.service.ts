import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take, map } from 'rxjs';
import { User } from './models/interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private openUserFormModalSource = new Subject<void>();
  openUserFormModal$ = this.openUserFormModalSource.asObservable();

  private INITIAL_DATA: User[] = [
    {id: 1, name: 'Franco', surname: 'Carchedi', email: 'franconcarchedi@gmail.com', password: '123'},
  ]

  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.INITIAL_DATA);

  constructor() {}

  openUserFormModal() {
    this.openUserFormModalSource.next();
  }

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  getUserById(id: number) {
    return this.usersSubject.pipe(
      take(1),
      map(( users ) =>  users.find((u) => u.id === id)),
    )
  }

  addUser(user: User): void {
    const currentUsers = this.usersSubject.getValue();
    this.usersSubject.next([...currentUsers, user]);
  }

  deleteUser(id: number): void {
    this.usersSubject.pipe(take(1)).subscribe({
      next: (arr) => {
        this.usersSubject.next(arr.filter((u) => u.id !== id));
      }
    })
  }

  // editUser(index: number, updatedUser: User): void {
  //   this.users[index] = updatedUser;
  // }

}
