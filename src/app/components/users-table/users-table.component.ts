import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Users {
  fullname: string;
  email: string;
  age: string;
}

const ELEMENT_DATA: Users[] = [
  {fullname: 'Franco Carchedi', email: 'franconcarchedi@gmail.com', age: '26'},
  {fullname: 'Rodrigo Mungo', email: 'rodrigomungo@gmail.com', age: '27'},
  {fullname: 'Jonathan Olivera', email: 'jonathanolivera@gmail.com', age: '27'},
];

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule]
})

export class UsersTableComponent {

  displayedColumns: string[] = ['fullname', 'email', 'age'];
  dataSource = ELEMENT_DATA;
}
