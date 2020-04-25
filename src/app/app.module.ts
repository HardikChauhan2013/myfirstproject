import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { AddprefixPipe } from './addprefix.pipe';
import { TaskstatusPipe } from './taskstatus.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    PipedemoComponent,
    AddprefixPipe,
    TaskstatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
