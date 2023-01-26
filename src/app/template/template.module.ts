import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';
import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    DirectivesComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ],
  exports: [
    BasicsComponent,
    DynamicsComponent,
    DirectivesComponent,
    SwitchesComponent
  ]
})
export class TemplateModule { }
