import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  @ViewChild('miFormulario') form!:NgForm
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.form.resetForm();
  }

}
