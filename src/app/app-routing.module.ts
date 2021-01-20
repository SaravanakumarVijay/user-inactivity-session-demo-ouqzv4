import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIdleComponent } from './user-idle-manager/user-idle/user-idle.component';


const routes: Routes = [
  {
    path: '',
    component: UserIdleComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
