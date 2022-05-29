import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.css']
})
export class ListadoResultadosComponent implements OnInit {

  listadoGanadores = [];

  constructor() {
    if(localStorage.getItem('listadoGanadores') !== null) //valido que el array listado ganadores exista
    {
      this.listadoGanadores = JSON.parse(localStorage.getItem('listadoGanadores')); //obtengo el array que existe
      console.log('Ganadores: ', this.listadoGanadores);
    }
  }

  ngOnInit(): void {
  }

}
