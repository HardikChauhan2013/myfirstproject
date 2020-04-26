import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterPageComponent } from './counter-page/counter-page.component';

import { FormsModule } from '@angular/forms';
import { CounterInputComponent } from './commStyle1/counter-input/counter-input.component';
import { CounterButtonComponent } from './commStyle1/counter-button/counter-button.component';
import { CounterSliderComponent } from './commStyle1/counter-slider/counter-slider.component';
import { CounterParentButtonComponent } from './commStyle2/counter-parent-button/counter-parent-button.component';
import { CounterChildInputComponent } from './commStyle2/counter-child-input/counter-child-input.component';
import { MymenuComponent } from './mymenu/mymenu.component';
import { CounterParentInputComponent } from './commStyle3/counter-parent-input/counter-parent-input.component';
import { CounterChildButtonComponent } from './commStyle3/counter-child-button/counter-child-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterPageComponent,
    CounterInputComponent,
    CounterButtonComponent,
    CounterSliderComponent,
    CounterParentButtonComponent,
    CounterChildInputComponent,
    MymenuComponent,
    CounterParentInputComponent,
    CounterChildButtonComponent
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
