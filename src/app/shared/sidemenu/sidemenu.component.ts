import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html'
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basics'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dynamics'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basics'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dynamics'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    },
  ];

}
