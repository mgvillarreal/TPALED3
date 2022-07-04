import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprarJuegoService {

  juego:string;
  juegosComprados:any[];
  mailJug:string;
  listadoJuegos:[] = [];
  mensaje:string = "";

  constructor() { }

  obtieneJuego(juego: string):void{
    this.juego = juego;
  }

  comprarJuego():boolean{
    
    this.obtengoJugador();

    if(confirm('Desea comprar el juego?'))
    {
      if(localStorage.getItem('juegosComprados') !== null)
      {
        this.juegosComprados = JSON.parse(localStorage.getItem('juegosComprados'));

        for (let i in this.juegosComprados)
        {
          if(this.mailJug === this.juegosComprados[i]['jugador'])
          {
            this.listadoJuegos = this.juegosComprados[i]['juegos']
            if(this.validaJuegoComprado(this.listadoJuegos))
            {
              this.juegosComprados[i].juegos.push(this.juego);
              localStorage.setItem("juegosComprados", JSON.stringify(this.juegosComprados));
            }
            else
            {
              this.mensaje = "Ya compró este juego anteriormente.";
              return false;
            }
          }
          
        }

      }
      else
      {
        this.juegosComprados = [];
        this.juegosComprados.push({jugador:this.mailJug, juegos: [this.juego]}); 
        localStorage.setItem("juegosComprados", JSON.stringify(this.juegosComprados));
        return true;
      }
    }
    return false;

  }

  validaJuegoComprado(listaJuegos: any):boolean{
    console.info("en validacion: ", listaJuegos);
    console.info("en validacion2: ", this.juego);
    for(let i in listaJuegos)
    {
      if(this.juego === listaJuegos[i])
      {
        console.info("es falso porque: ", listaJuegos[i]);
        return false;
      }
      else
      {
        console.info("es verdadero");
        return true;
      }
    }
    return false;
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
        }
      }

    }
  }

}
