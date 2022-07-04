import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos-comprados',
  templateUrl: './juegos-comprados.component.html',
  styleUrls: ['./juegos-comprados.component.css']
})
export class JuegosCompradosComponent implements OnInit {

  juegos:string[] = ['Tatetí', 'Mayor o Menor', 'Ahorcado', 'Dados'];
  usuarios:any[] = [];
  listadoMayorMenor:any[] = [];
  listadoAhorcado:any[] = [];
  listadoTateti:any[] = [];
  listadoDados:any[] = [];

  constructor() {
  }

  traerJugadores():void{

    if(localStorage.getItem('juegosComprados') !== null)
    {
      this.usuarios = JSON.parse(localStorage.getItem('juegosComprados'));
    }
    this.armaListados();
  }

  armaListados():void{

    for(let juego of this.juegos)
    {
      for(let usuario of this.usuarios)
      {
        if(usuario.juegos.includes(juego))
        {
          switch(juego)
          {
            case 'Mayor o Menor':
              this.listadoMayorMenor.push(usuario);
              break;
            case 'Ahorcado':
              this.listadoAhorcado.push(usuario);
              break;
            case 'Tateti':
              this.listadoTateti.push(usuario);
              break;
            case 'Dados':
              this.listadoDados.push(usuario);
              break;
            default:
              break;
          }
        }
      }
    }
    console.log("prueba: ", this.listadoMayorMenor);
  }
 

  ngOnInit(): void {
    this.traerJugadores();
  }

}
