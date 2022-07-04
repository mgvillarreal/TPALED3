import { Injectable } from '@angular/core';
import { Tateti } from '../clases/tateti';

@Injectable({
  providedIn: 'root'
})
export class ComprarJuegoService {

  juego:string;
  juegosComprados:any[];
  mailJug:string;
  listadoJuegos:any;

  constructor() { }

  obtieneJuego(juego: string):void{
    this.juego = juego;
  }

  comprarJuego():void{
    this.obtengoJugador();
    if(localStorage.getItem('juegosComprados') !== null)
    {
      this.juegosComprados = JSON.parse(localStorage.getItem('juegosComprados'));

      for (let i in this.juegosComprados)
      {
        if(this.mailJug === this.juegosComprados[i]['jugador'])
        {
          this.juegosComprados[i].juegos.push(this.juego);
          localStorage.setItem("juegosComprados", JSON.stringify(this.juegosComprados));
        }
      }

    }
    else
    {
      this.juegosComprados = [];
      this.juegosComprados.push({jugador:this.mailJug, juegos: [this.juego]}); 
      localStorage.setItem("juegosComprados", JSON.stringify(this.juegosComprados));
    }
    
  }

  obtengoJugador():void{
    let usurioLogeado = JSON.parse(localStorage.getItem('usuarioLog'));

    for (let i in usurioLogeado)
    {
      this.mailJug = usurioLogeado[i]['mail'];
    }

  }

  llenarJuegos():void{
    this.obtengoJugador();

    if(localStorage.getItem('juegosComprados') !== null)
    {
      this.juegosComprados = JSON.parse(localStorage.getItem('juegosComprados'));

      for (let i in this.juegosComprados)
      {
        if(this.mailJug === this.juegosComprados[i]['jugador'])
        {
          this.listadoJuegos = this.juegosComprados[i]['juegos'];
          console.log("prueba: ", this.listadoJuegos[1]);
        }
      }

    }
  }

}
