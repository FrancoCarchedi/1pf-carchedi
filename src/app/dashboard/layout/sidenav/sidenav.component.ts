import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormComponent } from 'src/app/dashboard/pages/users/components/users-form/users-form.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  /**
   *
   */
  constructor(public dialog: MatDialog) {

  }
}
