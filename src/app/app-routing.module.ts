import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ng g c about
import {AboutmeComponent} from './aboutme/aboutme.component';
//ng g c home
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
