import { Component, Input, OnInit } from '@angular/core';
import { Tateti } from 'src/app/clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  tateti = new Tateti('O', 'h');
  empates:number = 0;
  ganadosComputadora:number = 0;
  ganadosHumano:number = 0;
  IDS = [['ceroCero', 'ceroUno', 'ceroDos'], ['unoCero', 'unoUno', 'unoDos'], ['dosCero', 'dosUno', 'dosDos']];
  estMensaje:boolean = false;
  mensaje?:string;
  nombre:string;
  empateJuego:number = 0;
  ganaJuego:number = 0;
  pierdeJuego:number = 0;

  constructor() { 
    
  }

  jugadaHumano(celda, fila, columna):void{
    if(!this.tateti.estaTerminado())
    {
      if(!this.tateti.estaOcupada(fila, columna))
      {
        this.tateti.agregarFicha(this.tateti.fichaHumano, fila, columna);
        this.tateti.jugados += 1;
        let celda = document.getElementById(this.IDS[fila][columna]); 
        this.mostrarCelda(celda, 'O');
          
        if(this.tateti.estaTerminado())
        {
          this.actualizarMarcador('h');
          console.log("Terminó Jugador");
          this.tateti.reset(this.tateti.fichaHumano, 'h');
          this.limpiarCeldas();
          console.log("Jugador: " + this.ganadosHumano + ". Computadora: " + this.ganadosComputadora + ". Empates: " + this.empates);
          this.estMensaje = true;
          this.mensaje = 'Empate!';
          this.empateJuego++;
          this.guardarDatos();
        }
        else
        {
          this.tateti.cambiarTurno();
          console.log("Turno: " + this.tateti.turno);
          this.jugadaComputadora(this.tateti);
        }
      }
      else
      {
        console.log('Celda ocupada');
        this.estMensaje = true;
        this.mensaje = 'Celda ocupada';
      }
    }
  }

  jugadaComputadora(tateti):void{
    if(!tateti.estaTerminado())
    {
      let posicion = this.tateti.desocupada();
      let posiblesParaGanar = this.tateti.celdasVaciasDeLineasConDosOcupadas(this.tateti.fichaComputadora);
      let posiblesParaBloquear = this.tateti.celdasVaciasDeLineasConDosOcupadas(this.tateti.fichaHumano);
    
      if(posiblesParaGanar.length >= 1)
      {
        posicion = posiblesParaGanar[Math.floor(Math.random()* posiblesParaGanar.length)];
      }
      else
      {
        if(posiblesParaBloquear.length >= 1)
        {
          posicion = posiblesParaBloquear[Math.floor(Math.random()* posiblesParaBloquear.length)];
        }
        else
        {
          if (!this.tateti.estaOcupada(1,1)) posicion = [1,1];
        }
      } 

      let fila = posicion[0];
      let columna = posicion[1];
      tateti.agregarFicha(tateti.fichaComputadora, fila, columna);
      tateti.jugados +=1;

      let celda = document.getElementById(this.IDS[fila][columna]);
      this.mostrarCelda(celda, tateti.fichaComputadora);
          
      if(tateti.estaTerminado())
      {
        this.actualizarMarcador('c');
        console.log("Terminó Computadora");
        tateti.reset(tateti.fichaHumano, 'h');
        this.limpiarCeldas();
        console.log("Humano: " + this.ganadosHumano + ". Computadora: " + this.ganadosComputadora + ". Empates: " + this.empates);
        this.estMensaje = true;
        this.mensaje = 'Ganó Computadora';
        this.pierdeJuego++;
        this.guardarDatos();
      }
      else
      {
        tateti.cambiarTurno();
        console.log("Turno: " + tateti.turno);
      }
    }
  }

  actualizarMarcador(quienTermino):void{
    if(this.tateti.hay3EnLinea())
    {
      (quienTermino == 'h')? this.ganadosHumano++ : this.ganadosComputadora++;
    } else {
      this.empates++;
    }
  }

  limpiarCeldas():void{
    let celda;
    for (let fila of this.IDS)
    {
      for (let id of fila){
        celda = document.getElementById(id);
        celda.textContent = "";
      }		
    }
  }

  mostrarCelda(celda, ficha):void{
    celda.textContent = ficha;
  }

  eligeFicha():void{  
    let celdas:any = document.getElementsByClassName("celda");

    for(let c of celdas){
      c.style.display = "inline-block";
    }
  }

  resetear(){
    this.tateti.tablero = 	[
            [{ocupada: false, ficha: "", posicion: [0,0]},{ocupada: false, ficha: "", posicion: [0,1]}, {ocupada: false, ficha: "", posicion: [0,2]}],
            [{ocupada: false, ficha: "", posicion: [1,0]},{ocupada: false, ficha: "", posicion: [1,1]}, {ocupada: false, ficha: "", posicion: [1,2]}],
            [{ocupada: false, ficha: "", posicion: [2,0]},{ocupada: false, ficha: "", posicion: [2,1]}, {ocupada: false, ficha: "", posicion: [2,2]}]];
    this.tateti.fichaHumano = 'O';
    this.tateti.fichaComputadora = 'X';
    this.tateti.turno = 'h';
    this.tateti.jugados = 0;
    this.empates = 0;
    this.ganadosComputadora = 0;
    this.ganadosHumano = 0;
    this.estMensaje = false;
    this.mensaje = '';
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
    let listadoGanadoresTTT = [];
    let score:number = 0;
    let empates:number = 0;
    let perdidas:number = 0;

    if(localStorage.getItem('listadoGanadoresTTT') !== null) //valido que el array listado ganadores exista
    {
      listadoGanadoresTTT = JSON.parse(localStorage.getItem('listadoGanadoresTTT')); //obtengo el array que existe

      for (let ganador of listadoGanadoresTTT)
      {
        score = ganador.ganados + this.ganaJuego;
        empates = ganador.empates + this.empateJuego;
        perdidas = ganador.perdidos + this.pierdeJuego;
      }

    }
    else
    {
      listadoGanadoresTTT = []; //creo el array
    }
    let fecha = new Date();

    listadoGanadoresTTT.push({nombre: this.nombre, ganados: score, empates: empates, perdidos: perdidas, fecha: fecha.toLocaleDateString()}); //agrego el objeto al array
    localStorage.setItem("listadoGanadoresTTT", JSON.stringify(listadoGanadoresTTT)); //guardo el array actualizado
    console.info("La info del listado es ", listadoGanadoresTTT);
  }

  ngOnInit(): void {

  }

}