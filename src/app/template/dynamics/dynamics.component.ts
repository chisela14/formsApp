import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent implements OnInit {

  @ViewChild('form') form!:NgForm
  constructor() { }

  ngOnInit(): void {
  }

  notValid(campo:string){
    return this.form?.controls[campo]?.invalid && this.form?.controls[campo]?.touched
  }

  save(){
    this.form.resetForm();
  }

}
