import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}

  constructor(private fb:FormBuilder) { }

  myForm:FormGroup = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    favourites: this.fb.array([
      ['Suzuki', Validators.required],
      ['Yamaha']
    ], Validators.required)//array de controles
  })
  ngOnInit(): void {
  }

  isNotValid(field:string):boolean{
    return this.myForm.controls[field].invalid && this.myForm.controls[field].touched
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }
    this.myForm.reset();
  }

  delete(index: number){
    this.persona.favoritos.splice(index, 1);
  }
  
  
  add(){
    let favouriteName:string = this.myForm.controls['favourite'].value;
    console.log(favouriteName)
    let newFavorito:Favorito={id: this.persona.favoritos.length +1, nombre: favouriteName};
    if(favouriteName.trim()){
      this.persona.favoritos.push({...newFavorito});//mejor pasar una copia
    }
    
  }


}
