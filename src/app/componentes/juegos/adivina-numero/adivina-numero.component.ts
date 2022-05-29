import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent implements OnInit {

  numJug:number;
  numPc:number;
  resultado?:string;
  intentos:number;
  jugadas = [];
  nombre:string;

  constructor(private router: Router) { 
    this.numPc = Math.floor(Math.random() * 100 + 1); //genero un número al azar entre 1 y 100
    console.info('El numero de la pc es ', this.numPc)
    this.intentos = 0 //inicializo variable que cuenta intentos
  }

  ngOnInit(): void {
  }

  jugar():void {
    if(this.numJug == null)
    {
      this.resultado = 'Intenta ingresando un número';
    }
    else
    {
      if(this.numJug <= 0 || this.numJug > 100) //valido si número ingresado por el jugador es válido
      {
        this.resultado = 'El número está fuera de los límites, intenta entre 1 y 100';
      }
      else
      {
        if(this.numJug == this.numPc) //valido si los números son iguales
        {
          this.intentos++;
          this.resultado = 'Ganaste!!';
          this.guardarDatos();
        }
        else
        {
          if(this.numJug > this.numPc) //valido si el número del jugador es más alto
          {
            this.resultado = 'Uh! Mejor intenta un número más bajo...';
            this.intentos++;
          }
          else
          {
            this.resultado = 'Uh! Mejor intenta un número más alto...';
            this.intentos++;
          }
        }
      }
    }

    
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
    let listadoGanadores = [];

    if(localStorage.getItem('listadoGanadores') !== null) //valido que el array listado ganadores exista
    {
      listadoGanadores = JSON.parse(localStorage.getItem('listadoGanadores')); //obtengo el array que existe
    }
    else
    {
      listadoGanadores = []; //creo el array
    }
    listadoGanadores.push({juego: "Adivina", nombre: this.nombre, intentos: this.intentos}); //agrego el objeto al array
    localStorage.setItem("listadoGanadores", JSON.stringify(listadoGanadores)); //guardo el array actualizado
    console.info("La info del listado es ", listadoGanadores);
  }

  resetear():void{
    this.intentos = 0;
    this.numPc = Math.floor(Math.random() * 100 + 1);
    this.resultado = null;
    this.numJug = null;
  }

}
