import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importacion de modulos de material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
//Importacion de modulos de Angular
import { ReactiveFormsModule } from '@angular/forms';
//Importacion de componentes
import { ToolbarComponent } from './dashboard/layout/toolbar/toolbar.component';
import { SidenavComponent } from './dashboard/layout/sidenav/sidenav.component';
import { UsersTableComponent } from './dashboard/pages/users/components/users-table/users-table.component';
import { UsersFormComponent } from './dashboard/pages/users/components/users-form/users-form.component';
import { AuthComponent } from './auth/auth.component';
//Directivas y pipes
import { MiTituloSizeDirective } from './shared/directives/mi-titulo-size.directive';
import { FullnamePipe } from './shared/pipes/fullname.pipe';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserService } from './dashboard/pages/users/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    MiTituloSizeDirective,
    FullnamePipe,
    UsersTableComponent,
    UsersFormComponent,
    AuthComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
