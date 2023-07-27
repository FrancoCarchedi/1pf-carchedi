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
  dataSource$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSource$ = this.userService.getUsers();
  }

  addUser(user: User): void {
    this.userService.addUser(user);
  }

  displayedColumns: string[] = ['id','fullname', 'email', 'actions'];
}
