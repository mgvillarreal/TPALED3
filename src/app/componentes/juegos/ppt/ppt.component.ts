import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  
  opJug:string;
  opPc:string;
  resultado:string = '';
  puntajePc:number = 0;
  puntajeJug:number = 0;
  ganador:boolean = false;

  constructor() {
   
  }

  tomarOpcionJugador(opcion:string):void{
    this.opJug = opcion;
    this.jugar();
  }

  opcionPc(): void{
    let opcionPc = Math.floor(Math.random() * 2 + 0);
    
    switch(opcionPc){
      case 0:
        this.opPc = 'Piedra';
        break;
      case 1:
        this.opPc = 'Papel';
        break;
      case 2:
        this.opPc = 'Tijera';
    }
  }
 
  jugar(): void{
    this.opcionPc();

      switch(this.opPc){
        case 'Piedra':
          if(this.opJug == 'Papel')
          {
            this.resultado = 'Tú ganas';
            this.puntajeJug++;
          }
          else
          {
            if(this.opJug == 'Tijera')
            {
              this.resultado = 'Computadora gana';
              this.puntajePc++;
            }
            else
            {
              this.resultado = 'Empate';
            }
          }
        break;
        case 'Papel':
          if(this.opJug == 'Papel')
          {
            this.resultado = 'Empate';
          }
          else
          {
            if(this.opJug == 'Tijera')
            {
              this.resultado = 'Tú ganas';
              this.puntajeJug++;
            }
            else
            {
              this.resultado = 'Computadora gana';
              this.puntajePc++;
            }
          }
        break;
        default: //Pc elige Tijera
            if(this.opJug == 'Papel')
          {
            this.resultado = 'Computadora gana';
            this.puntajePc++;
          }
          else
          {
            if(this.opPc == 'Tijera')
            {
              this.resultado = 'Empate';
            }
            else
            {
              this.resultado = 'Tú ganas';
              this.puntajeJug++;
            }
          }
        break;
      }
      this.validarResultado();
  }

  validarResultado():void{
    if(this.puntajeJug == 3 || this.puntajePc == 3)
    {
      this.ganador = true;
      if(this.puntajeJug > this.puntajePc)
      {
        this.resultado = '¡Ganaste la partida!';
      }
      else
      {
        this.resultado = 'Perdiste la partida :(';
      }
    }
  }

  resetear():void{
    this.resultado = '';
    this.puntajePc = 0;
    this.puntajeJug = 0;
    this.ganador = false;
  }
  
  ngOnInit(): void {
  }

}
