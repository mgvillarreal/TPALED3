import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthJuegosService {

  mailJug:string;
  juegosComprados:[];
  listadoJuegos:[];
  rutaJuego:string;
  tieneAcceso:boolean;

  constructor() { }

  obtieneRutaJuego(juego: string):void{
    this.rutaJuego = juego;
    this.validoAccesoJuegos();
  }

  validoAccesoJuegos():void{
    this.obtengoJugador();
    let tieneAcceso:boolean;
    let bandera=false;

    if(localStorage.getItem('juegosComprados') !== null)
    {
      this.juegosComprados = JSON.parse(localStorage.getItem('juegosComprados'));

      for (let i in this.juegosComprados)
      {
        if(this.mailJug === this.juegosComprados[i]['jugador'])
        {
          this.listadoJuegos = this.juegosComprados[i]['juegos'];
          
          for(let j in this.listadoJuegos)
          {
            console.log("bandera: ", bandera);
            if(this.rutaJuego === this.listadoJuegos[j] || this.rutaJuego === 'PPT' || this.rutaJuego === 'Adivina')
            {
              console.info("tiene acceso");
              this.tieneAcceso = true;
              bandera=true;
            }
          }

        }
      }

      if(!bandera)
      {
        this.tieneAcceso = false;
        console.info("no tiene acceso");
      }

    }
    else
    {
      if(this.rutaJuego === 'PPT' || this.rutaJuego === 'Adivina')
      {
        console.info("tiene acceso");
        this.tieneAcceso = true;
      }
      else
      {
        this.tieneAcceso = false;
        console.info("no tiene acceso");
      }
      
    }

  }

  obtengoJugador():void{
    let usurioLogeado = JSON.parse(localStorage.getItem('usuarioLog'));

    for (let i in usurioLogeado)
    {
      this.mailJug = usurioLogeado[i]['mail'];
    }

  }
}
