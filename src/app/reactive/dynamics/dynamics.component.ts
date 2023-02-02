import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

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

  constructor(private fb:FormBuilder) { }

  myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array([
      ['Suzuki', Validators.required],
      ['Yamaha', Validators.required]
    ], Validators.required)//array de controles
  })

  newFavourite: FormControl = this.fb.control('', Validators.required)

  get favourites(){
    return this.myForm.get('favourites') as FormArray;
  }

  ngOnInit(): void {
  }

  isNotValid(field:string):boolean{
    return this.myForm.controls[field].invalid && this.myForm.controls[field].touched
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }
    this.favourites.clear();//para eliminar los elementos en vez de dejarlos a null
    this.myForm.reset();
  }

  add(){ 
    if(this.newFavourite.valid){
                    //push de FormArray
      this.favourites.push(this.fb.control(this.newFavourite.value, Validators.required))//así se envía una copia
    }else{
      Swal.fire('Error', 'El elemento a agregar no puede quedar vacío')
    }
    this.newFavourite.reset();
  }

  delete(index: number){
    this.favourites.removeAt(index);
  }

}
