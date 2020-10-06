import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {ProfileComponent} from 'src/app/components/profile/profile.component'


const routes: Routes = [
  { path: 'profile', component: ProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
