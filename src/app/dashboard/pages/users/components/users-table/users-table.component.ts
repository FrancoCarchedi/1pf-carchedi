import { Component, OnInit } from '@angular/core';
import { User } from '../../models/interfaces/user';
import { UserService } from '../../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})

export class UsersTableComponent implements OnInit {
  dataSource$: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSource$ = this.userService.getUsers();
  }

  getUserById(id: number) {
    this.userService.getUserById(id);
    console.log(id);
  }

  addUser(user: User): void {
    this.userService.addUser(user);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  displayedColumns: string[] = ['id','fullname', 'email', 'actions'];
}
