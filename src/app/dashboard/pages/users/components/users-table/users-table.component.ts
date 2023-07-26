import { Component, Input, } from '@angular/core';
import { User } from '../../models/interfaces/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})

export class UsersTableComponent {
  @Input() dataSource: User[] = [];

  displayedColumns: string[] = ['id','fullname', 'email', 'actions'];
}
