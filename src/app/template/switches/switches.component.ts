import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

//objeto persona con genero y notificaciones
interface Persona {
  genero: string,
  notificaciones: boolean
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  @ViewChild('miFormulario') form!:NgForm
  persona: Persona = {genero: '', notificaciones: false};
  //propiedad terminos y condiciones, tiene que estar marcado para que envíe el formulario
  terms:boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

  save(){
    this.form.resetForm();
  }

}
