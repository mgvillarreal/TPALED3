import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  juegoSeleccionado:boolean = false;
  
  constructor() { 
    this.muestraLog;
  }

  seleccionaJuego():void{
    this.juegoSeleccionado = true;
    this.muestraLog;
  }

  muestraLog():void{
    console.info("a ver: ", this.juegoSeleccionado);
  }

  ngOnInit(): void {
  }

}
