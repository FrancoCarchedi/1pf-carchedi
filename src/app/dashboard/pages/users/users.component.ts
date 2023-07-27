import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './models/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  // onCreateUser(): void {
  //   this.matDialog
  //     // ABRO EL MODAL
  //     .open(UserFormDialogComponent)
  //     // Y DESPUES DE QUE CIERRE
  //     .afterClosed()
  //     // HAGO ESTO...
  //     .subscribe({
  //       next: (v) => {
  //         if (v) {
  //           this.userService.createUser({
  //             name: v.name,
  //             email: v.email,
  //             password: v.password,
  //             surname: v.surname,
  //           });
  //         }
  //       },
  //     });
  //}
}
