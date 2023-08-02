import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { CoursesComponent } from './dashboard/pages/courses/courses/courses.component';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
  // { path: 'home', component: HomeComponent },
  // { path: 'users', children: [{path: '', component: UsersComponent}, {path: ':id', component: UserDetailComponent}] },
  // { path: 'courses', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
