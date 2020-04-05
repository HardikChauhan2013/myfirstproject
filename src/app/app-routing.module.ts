import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutmeComponent} from './aboutme/aboutme.component';
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
