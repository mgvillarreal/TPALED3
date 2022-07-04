import { Component, OnInit } from '@angular/core';
import { ComprarJuegoService } from 'src/app/servicios/comprar-juego.service';

@Component({
  selector: 'app-comprar-juego',
  templateUrl: './comprar-juego.component.html',
  styleUrls: ['./comprar-juego.component.css']
})
export class ComprarJuegoComponent implements OnInit {

  juego:string;
  juegoSeleccionado = "";

  constructor(public comprarServ: ComprarJuegoService) {
  
  }

  ngOnInit(): void {
  }

  recibeJuego(juego: string):void{
    this.juego = juego;
    // this.juegoSeleccionado = juego;
    this.comprarServ.obtieneJuego(this.juego);
    this.comprarServ.comprarJuego();

    this.actListado();
  }

  actListado():void{
    // if(this.comprarServ.comprarJuego)
    // {
    //   this.juegoSeleccionado = this.juego;
    // }
    this.comprarServ.llenarJuegos();
  }

}
