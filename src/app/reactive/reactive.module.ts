import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchesComponent } from './switches/switches.component';
import { ReactiveRoutingModule } from './reactive-routing.module';



@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ],
  exports: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent
  ]
})
export class ReactiveModule { }
