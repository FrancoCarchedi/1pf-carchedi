import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { User } from '../../models/interfaces/user';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})

export class UsersFormComponent {
  editingUser?: User;

  nameControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2),
  ]);
  surnameControl = new FormControl<string | null>(null, [Validators.required]);
  emailControl = new FormControl<string | null>(null, [Validators.required]);
  passwordControl = new FormControl<string | null>(null, [Validators.required]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
  });

  constructor(private formBuilder: FormBuilder) {

  }
}
