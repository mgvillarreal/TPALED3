import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  num1:number;
  num2:number;
  acierto:number = 0;
  desacierto:number = 0;
  opcionJug:string;
  rondas:number = 0;
  resultado:string = '';
  terminoJuego:boolean = false;

  constructor() {
    this.num1 = Math.floor(Math.random() * 100 + 1);
    this.num2 = Math.floor(Math.random() * 100 + 1);  
  }

  opcion(opcion:string):void{
    this.opcionJug = opcion;
    console.log('Opcion: ', this.opcionJug);
    this.jugar();
  }

  eligeNumeros():void{
    this.num1 = Math.floor(Math.random() * 100 + 1);
    this.num2 = Math.floor(Math.random() * 100 + 1);  
  }

  jugar():void{

    switch(this.opcionJug){
      case 'mayorQue':
        if(this.num1 > this.num2)
        {
          this.acierto++;
          this.eligeNumeros();
          this.rondas++;
        }
        else
        {
          this.desacierto++;
          this.eligeNumeros();
          this.rondas++;
        }
        break;
      case 'menorQue':
        if(this.num1 < this.num2)
        {
          this.acierto++;
          this.eligeNumeros();
          this.rondas++;
        }
        else
        {
          this.desacierto++;
          this.eligeNumeros();
          this.rondas++;
        }
        break;
      case 'igual':
        if(this.num1 == this.num2)
        {
          this.acierto++;
          this.eligeNumeros();
          this.rondas++;
        }
        else
        {
          this.desacierto++;
          this.eligeNumeros();
          this.rondas++;
        }
        break;
    }

    this.comparaResultados();
  }

  comparaResultados():void{
    if(this.rondas >= 6)
    {
      this.terminoJuego = true;
      if(this.acierto > this.desacierto)
      {
        this.resultado = "Has ganado!";
      }
      else
      {
        this.resultado = "Uh! Perdiste...";
      }
    }
  }

  resetear():void{
    this.acierto = 0;
    this.desacierto = 0;
    this.terminoJuego = false;
    this.rondas = 0;
    this.eligeNumeros();
    this.resultado = '';
  }

  ngOnInit(): void {
  }

}
