import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';


const routes: Routes = [
  { path: "", component: TodolistComponent },
  { path: "pipe", component: PipedemoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
