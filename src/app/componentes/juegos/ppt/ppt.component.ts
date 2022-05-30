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
  nombre:string;

  constructor() {
   
  }

  tomarOpcionJugador(opcion:string):void{
    this.opJug = opcion;
    this.jugar();
  }

  opcionPc(): void{
    let opcionPc = Math.floor(Math.random() * (0 - 3) * -1);
    
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
        this.guardarDatos();
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

  obtengoNombre():void{
    let usurioLogeado = JSON.parse(localStorage.getItem('usuarioLog'));

    for (let i in usurioLogeado)
    {
      this.nombre = usurioLogeado[i]['nombre'];
    }
  }

  guardarDatos():void{
    this.obtengoNombre();
    let listadoGanadoresPPT = [];
    let score:number = 0;

    if(localStorage.getItem('listadoGanadoresPPT') !== null) //valido que el array listado ganadores exista
    {
      listadoGanadoresPPT = JSON.parse(localStorage.getItem('listadoGanadoresPPT')); //obtengo el array que existe

      for (let ganador of listadoGanadoresPPT)
      {
        score = ganador.ganados;
      }

    }
    else
    {
      listadoGanadoresPPT = []; //creo el array
    }
    let fecha = new Date();

    listadoGanadoresPPT.push({nombre: this.nombre, ganados: score+1, fecha: fecha.toLocaleDateString()}); //agrego el objeto al array
    localStorage.setItem("listadoGanadoresPPT", JSON.stringify(listadoGanadoresPPT)); //guardo el array actualizado
    console.info("La info del listado es ", listadoGanadoresPPT);
  }
  
  ngOnInit(): void {
    
  }

}
