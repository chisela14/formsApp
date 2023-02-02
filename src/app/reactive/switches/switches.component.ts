import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genero: ['', Validators.required],
    notificaciones: [true],
    terminos: [false, Validators.requiredTrue]//no .required porque false es un valor y queremos que esté a true
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(({terminos, ...rest}) => {
      //.subscribe((values)... devuelve un objeto, se puede deconstruir
      // this.persona.genero = values.genero;
      // this.persona.notificaciones = values.notificaciones;
      this.persona = rest;
    })
  }

  save(){
    if(this.myForm.valid){
      console.log('Enviado');
    }
    
  }

}
