import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from 'src/app/fullname.pipe';

export interface Users {
  name: string;
  surname: string;
  email: string;
  age: string;
}

const ELEMENT_DATA: Users[] = [
  {name: 'Franco', surname: 'Carchedi', email: 'franconcarchedi@gmail.com', age: '26'},
  {name: 'Franco', surname: 'Carchedi' , email: 'franconcarchedi@gmail.com', age: '26'},
  {name: 'Franco', surname: 'Carchedi' , email: 'franconcarchedi@gmail.com', age: '26'},
];

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule, FullnamePipe]
})

export class UsersTableComponent implements OnChanges {
  @Input() usuario: any

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  displayedColumns: string[] = ['fullname', 'email', 'age'];
  dataSource = ELEMENT_DATA;
}
