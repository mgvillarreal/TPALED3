import { Component, OnInit } from '@angular/core';
import { Tateti } from 'src/app/clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  empates:number = 0;
  ganadosComputadora:number = 0;
  ganadosHumano:number = 0;
  IDS = [['ceroCero', 'ceroUno', 'ceroDos'], ['unoCero', 'unoUno', 'unoDos'], ['dosCero', 'dosUno', 'dosDos']];
  tateti = new Tateti('O', 'h');

  constructor() { 
    
  }

  jugadaHumano(celda, fila, columna):void{
    if(!this.tateti.estaTerminado())
    {
      if(!this.tateti.estaOcupada(fila, columna))
      {
        this.tateti.agregarFicha(this.tateti.fichaHumano, fila, columna);
        this.tateti.jugados += 1;
        this.mostrarCelda(celda, 'O');
        console.log('celda: ', celda);
        //this.tateti.mostrarTablero();
          
        if(this.tateti.estaTerminado())
        {
          this.actualizarMarcador('h');
          console.log("terminó Humano");
          this.tateti.reset(this.tateti.fichaHumano, 'h'); //se mantiene la misma ficha que tenía al principio. --podría haber una función que elija al azar a quién le toca el turno
          this.limpiarCeldas();
          this.mostrarTurno(this.tateti);
          this.mostrarMarcador();
          console.log("Humano: " + this.ganadosHumano + ". Computadora: " + this.ganadosComputadora + ". Empates: " + this.empates);
        }
        else
        {
          this.tateti.cambiarTurno();
          this.mostrarTurno(this.tateti);
          console.log("turno: " + this.tateti.turno);
          this.jugadaComputadora(this.tateti);
        }
      }
      else
      {
        console.log('ocupada');
      }
    }
  }

  jugadaComputadora(tateti):void{
    if(!tateti.estaTerminado())
    {
      //ELIGE CELDA
      let posicion = this.tateti.desocupada();
      let posiblesParaGanar = this.tateti.celdasVaciasDeLineasConDosOcupadas(this.tateti.fichaComputadora);
      let posiblesParaBloquear = this.tateti.celdasVaciasDeLineasConDosOcupadas(this.tateti.fichaHumano);
    
      if(posiblesParaGanar.length >= 1)
      {
        posicion = posiblesParaGanar[Math.floor(Math.random()* posiblesParaGanar.length)];//elijo al azar una de las celdas
      }
      else
      {
        if(posiblesParaBloquear.length >= 1)
        {
          posicion = posiblesParaBloquear[Math.floor(Math.random()* posiblesParaBloquear.length)];//elijo al azar una de las celdas
        }
        else
        {
          //antes de dejar que elija cualquiera desocupada, ver si está libre la del medio, la (1,1)
          if (!this.tateti.estaOcupada(1,1)) posicion = [1,1];
        }
      } 

      //AGREGA FICHA
      let fila = posicion[0];
      let columna = posicion[1];
      tateti.agregarFicha(tateti.fichaComputadora, fila, columna);
      tateti.jugados +=1;

      let celda = document.getElementById(this.IDS[fila][columna]); 
      this.mostrarCelda(celda, tateti.fichaComputadora);
      
      tateti.mostrarTablero();
          
      //CHEQUEA SI TERMINO EL PARTIDO
      if(tateti.estaTerminado())
      {
        this.actualizarMarcador('c');
        console.log("terminó Computadora");
        tateti.reset(tateti.fichaHumano, 'h');//¿habría otra manera de no tener el reset en 2 lugares?
        this.limpiarCeldas();
        this.mostrarTurno(tateti);
        this.mostrarMarcador();
         console.log("Humano: " + this.ganadosHumano + ". Computadora: " + this.ganadosComputadora + ". Empates: " + this.empates);
      }
      else
      {
        tateti.cambiarTurno();
        this.mostrarTurno(tateti);
        console.log("turno: " + tateti.turno);
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

  mostrarMarcador():void{
    // let ganadosH = document.getElementById('ganadosH');
    // let ganadosC = document.getElementById('ganadosC');
    // let empate = document.getElementById('empate');
    
    // ganadosC.textContent = "Computadora: " + this.ganadosComputadora;
    // ganadosH.textContent = "Humano: " + this.ganadosHumano;
    // empate.textContent = "Empate: " + this.empates;
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

  mostrarCelda(celda:any, ficha:string):void{
    celda.textContent = ficha;
  }

  mostrarTurno(tateti):void{
    let display = document.getElementById('turno');
    //display.textContent = 'Turno: ' + tateti.turno;
  }

  eligeFicha():void{
    
    //tateti:new Tateti(tipoFicha, 'h');
  
    let celdas:any = document.getElementsByClassName("celda");

    for (let c of celdas){
        c.style.display = "inline-block";
    }
    
    //ocultar selección de ficha
    // let ficha = document.getElementById("ficha");
    // //ficha.style.display = "none";
    
    // //mostrar jugadores, turno y marcador
    // let hum = document.getElementById("hum");
    // let comp = document.getElementById("comp");
    // let turno = document.getElementById("turno");
    // let marcador = document.getElementsByClassName('marcador')[0];
    
    // hum.textContent = "Humano juega con " + this.tateti.fichaHumano;
    // comp.textContent = "Computadora juega con " + this.tateti.fichaComputadora; 
    // turno.textContent = "Turno " + this.tateti.turno;
    
    //this.mostrarMarcador();
  }

  ngOnInit(): void {

  }

}