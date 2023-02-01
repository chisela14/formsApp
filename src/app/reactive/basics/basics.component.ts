import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {
  //toda la lógica se translada a la parte del componente
  //no hacen falta las ? porque no hay que esperar a que html cree el formulario

  // myForm:FormGroup = new FormGroup({
  //   name: new FormControl('Patatas'),
  //   price: new FormControl(5),
  //   stock: new FormControl(100)
  // })

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0.1)]],
    stock: [null, [Validators.min(0)]]
  })

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.myForm.setValue({ //hay que pasar a todos los campos
      name:'Patatas',
      price: 5,
      stock: 100
    })
  }

  isNotValid(field:string): boolean{
    return this.myForm.controls[field].invalid && this.myForm.controls[field].touched;
    // return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }
    this.myForm.reset()//ponerlo todo a cero
    // this.myForm.reset({ //puedo poner solo los campos que quiera
    //   name: 'Tomates',
    //   stock: 500
    // })
    console.log(this.myForm.value)
  }

}
