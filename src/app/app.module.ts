import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HomeComponent } from './dashboard/pages/home/home.component';
import { CoursesComponent } from './dashboard/pages/courses/courses/courses.component';
import { SharedModule } from './shared/shared.module';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';
import { SidebarRoutingModule } from './dashboard/layout/sidenav/sidenav-routing.module';

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
    UsersComponent,
    HomeComponent,
    CoursesComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    // SidebarRoutingModule
  ],
  exports: [
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
