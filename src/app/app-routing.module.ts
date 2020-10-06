import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {ProfileComponent} from 'src/app/components/profile/profile.component'
import {RepoComponent} from 'src/app/components/repo/repo.component'


const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'repo', component: RepoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
