import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent implements OnInit {

  @ViewChild('form') form!:NgForm
  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}

  constructor() { }

  ngOnInit(): void {
  }

  notValid(campo:string){
    return this.form?.controls[campo]?.invalid && this.form?.controls[campo]?.touched
  }

  save(){
    this.form.resetForm();
  }

  delete(index: number){
    this.persona.favoritos.splice(index, 1);
  }
  
  newFavorito:Favorito={id: 0, nombre: ""};
  add(){
    if(this.newFavorito.nombre.trim()){
      this.newFavorito.id = this.persona.favoritos.length +1
      this.persona.favoritos.push({...this.newFavorito});//mejor pasar una copia
      this.newFavorito = {id: 0, nombre: ""};
    }
    
  }

}
