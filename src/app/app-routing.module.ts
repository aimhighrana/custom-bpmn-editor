import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmnComponent } from './bpmn/bpmn.component';
import { DmnComponent } from './dmn/dmn.component';

const routes: Routes = [
  {
    path:'', redirectTo:'bpmn',pathMatch:'full'
  },{
    path: 'bpmn', component: BpmnComponent
  },{
    path: 'dmn', component: DmnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
