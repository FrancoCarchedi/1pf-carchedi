import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() usuarioCargado = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: new FormControl('', [Validators.required, Validators.email]),
      age: ['', Validators.required],
    });

    this.formulario.valueChanges.subscribe((valor) => {
      console.log('Valores del formulario', valor);
    })
  }

  //Aun no funciona
  cargarUsuario() {
    if (this.formulario.valid) {
      this.usuarioCargado.emit(this.formulario.value);
    }
  };
}
