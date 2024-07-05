import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpmnComponent } from './bpmn/bpmn.component';
import { DmnComponent } from './dmn/dmn.component';

@NgModule({
  declarations: [
    AppComponent,
    BpmnComponent,
    DmnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
