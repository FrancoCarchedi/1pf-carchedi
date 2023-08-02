import { Component, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './models/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './user.service';
import { UsersFormComponent } from './components/users-form/users-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private userCommunicationService: UserService, private dialog: MatDialog) {

  }

  openUserFormModal() {
    const dialogRef = this.dialog.open(UsersFormComponent, {
      width: '400px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      //se puede hacer algo después de cerrar el modal
    })
  }
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
