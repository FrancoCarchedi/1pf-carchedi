import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       component: HomeComponent,
  //     },
  //     {
  //       path: 'users',
  //       children: [
  //         {
  //           path: '',
  //           component: UsersComponent,
  //         },
  //         {
  //           path: ':id',
  //           component: UserDetailComponent
  //         }
  //       ]
  //     },
  //     {
  //       path: 'courses',
  //       component: CoursesComponent,
  //     },
  //     {
  //       path: '**',
  //       redirectTo: 'home',
  //     }
  //   ]
  // },
  // {
  //   path: 'auth',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterComponent
  //     },
  //     {
  //       path: '**',
  //       redirectTo: 'login'
  //     }
  //   ]
  // },
  // {
  //   // ** Se usa para decir "cualquier path que no sea ninguno de los declarados anteriormente"
  //   path: '**',
  //   redirectTo: '/auth/login',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
