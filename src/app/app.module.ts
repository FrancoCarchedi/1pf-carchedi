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
import {MatButtonModule} from '@angular/material/button';
//Importacion de componentes
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsersTableComponent } from './dashboard/pages/users/components/users-table/users-table.component';
import { UsersFormComponent } from './dashboard/pages/users/components/users-form/users-form.component';
import { MiTituloSizeDirective } from './shared/directives/mi-titulo-size.directive';
import { FullnamePipe } from './shared/pipes/fullname.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/pages/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    MiTituloSizeDirective,
    FullnamePipe,
    UsersTableComponent,
    UsersFormComponent,
    AuthComponent
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
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
