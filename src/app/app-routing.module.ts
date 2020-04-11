import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ng g c about
import {AboutmeComponent} from './aboutme/aboutme.component';
//ng g c home
import {HomeComponent} from './home/home.component';
import {BindingdemoComponent} from './bindingdemo/bindingdemo.component';
import { TwobindingdemoComponent } from './twobindingdemo/twobindingdemo.component';
import { CounterComponent } from './counter/counter.component';
import { ConditionDemoComponent } from './condition-demo/condition-demo.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutmeComponent},
  {path:"binding",component:BindingdemoComponent},
  {path:"twobinding",component:TwobindingdemoComponent},
  {path:"counter",component:CounterComponent},
  {path:"condition",component:ConditionDemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
