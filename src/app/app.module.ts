import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { BindingdemoComponent } from './bindingdemo/bindingdemo.component';
import { TwobindingdemoComponent } from './twobindingdemo/twobindingdemo.component';
 
//In java
//import java.util.list;
//In TS
//import {list} from "./java/bli/java.util";

import {FormsModule} from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { ConditionDemoComponent } from './condition-demo/condition-demo.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    BindingdemoComponent,
    TwobindingdemoComponent,
    CounterComponent,
    ConditionDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
