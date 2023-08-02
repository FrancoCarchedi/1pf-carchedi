import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() eventOpenDialog = new EventEmitter<void>();

  userForm: FormGroup;
  // public dialogRef: MatDialogRef<UsersFormComponent>

  constructor(private formBuilder: FormBuilder, private userService: UserService, private dialog: MatDialog ,private dialogRef: MatDialogRef<UsersFormComponent>) {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })

    this.userService.openUserFormModal$.subscribe(() => {
      this.dialogRef.close();
      this.openDialog();
    })
  }

  openDialog() {
    this.dialogRef  = this.dialog.open(UsersFormComponent, {
      width: '800px',
      disableClose: true,
    })

    this.dialogRef.afterClosed().subscribe(result => {
      //Aca puede hacer algo cuando se cierra
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
