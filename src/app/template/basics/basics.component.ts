import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {
                      //como quiero que se llame dentro de mi clase, puede ser diferente
  @ViewChild('myForm') myForm!:NgForm 
  constructor() { }

  ngOnInit(): void {
  }

  initForm = ({
    product: 'patatas'
  })

  notValid(campo:string):boolean{
    return this.myForm?.controls[campo]?.invalid && this.myForm?.controls[campo]?.touched
  }
  notValidName():boolean{
    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product']?.touched
  }
  notValidPrice():boolean{
    return this.myForm?.controls['price']?.invalid && this.myForm?.controls['price']?.touched
    //this.myForm?.controls['price']?.value<0 
  }
  notValidStock():boolean{
    return this.myForm?.controls['stock']?.invalid && this.myForm?.controls['stock']?.touched
  }

  save(){
    console.log(this.myForm);
    //this.myForm.resetForm(); resetea todo
    this.myForm.resetForm({
      price:0,
      stock:0
    });
  }

}
