import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
    {
        path:'basics',
        component: BasicsComponent
    },
    {
        path:'dynamics',
        component: DynamicsComponent
    },
    {
        path:'directives',
        component: DirectivesComponent
    },
    {
        path:'switches',
        component: SwitchesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule{}