import { Component, Input, OnInit } from '@angular/core';
import { ComprarJuegoService } from 'src/app/servicios/comprar-juego.service';

@Component({
  selector: 'app-listado-comprados',
  templateUrl: './listado-comprados.component.html',
  styleUrls: ['./listado-comprados.component.css']
})
export class ListadoCompradosComponent implements OnInit {

  @Input() juegoSeleccionado = '';

  constructor(public comprarServ: ComprarJuegoService) {
    this.traerJuegos();
  }

  ngOnInit(): void {
  }

  traerJuegos():void{
    this.comprarServ.llenarJuegos(); 
  }

}
