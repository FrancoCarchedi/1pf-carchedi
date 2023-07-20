import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf]
})

export class UsersFormComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: new FormControl('', [Validators.required, Validators.email]),
      age: ['', [Validators.required, Validators.pattern(/^-?\d+$/)], Validators.min(1)],// Agrega aquí los otros campos de tu formulario
    });
  }
}
