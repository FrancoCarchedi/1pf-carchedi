import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../../models/interfaces/user';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})

export class UsersFormComponent {
  userForm: FormGroup;
  private dialogRef: MatDialogRef<UsersFormComponent>

  constructor(private formBuilder: FormBuilder, private userService: UserService, public dialog: MatDialog) {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UsersFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog is closed' + result);
    })
  }

  addUser(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.userService.addUser(user);
      this.userForm.reset();
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.userService.addUser(user);
      this.userForm.reset(); // Resetea el formulario después de agregar un usuario
    }
  }
}
