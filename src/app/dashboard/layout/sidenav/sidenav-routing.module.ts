import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../../pages/users/users.component';

// const routes: Routes = [
//   {
//     path: 'users', component: UsersComponent, outlet: 'users'
//   }
// ];


@NgModule({
  declarations: [
    // UsersComponent
  ],
  imports: [
    CommonModule,
    // [RouterModule.forChild(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class SidebarRoutingModule { }
