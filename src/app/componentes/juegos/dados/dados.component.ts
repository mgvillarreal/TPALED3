import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  juegoComenzado:boolean = false;
  flagMontoInicial:boolean = false;
  montoInicial:number;
  apuesta:number;
  saldo:number = 0;
  resultado:string = '';
  dado1:number = 0;
  dado2:number;
  dado3:number;
  flagPerdio:boolean = false;

  constructor() { }

  ingresaDinero():void{
    if(this.montoInicial > 0)
    {
      this.juegoComenzado = true;
      this.flagMontoInicial = true;
      this.saldo = this.montoInicial;
      this.resultado = '';
    }
    else
    {
      this.resultado = "Debes ingresar un monto mayor a $0.";
    }
    
  }

  apostar():void{
    if(this.validaMontoApuesta())
    {
      this.dado1 = Math.floor(Math.random() * 6 + 1);
      this.dado2 = Math.floor(Math.random() * 6 + 1);
      this.dado3 = Math.floor(Math.random() * 6 + 1);
      this.evaluaApuesta();
      this.apuesta = null;
    }
  }

  validaMontoApuesta():boolean{
    if(this.apuesta > 0)
    {
      if(this.apuesta > this.saldo)
      {
        this.resultado = "Tu saldo no es suficiente para esta apuesta.";
        return false;
      }
      else
      {
        return true;
      }
    }
    else
    {
      this.resultado = "Debes apostar un monto mayor a $0.";
      return false;
    }
    
  }

  evaluaApuesta():void{
    if(this.dado1 === this.dado2 && this.dado1 === this.dado3) //tres dados iguales
    {
      if(this.dado1 === 6) //si en los dados sale 6
      {
        this.saldo = this.saldo + (this.apuesta * 5);
        this.resultado = "Excelente! Sumas $" + this.apuesta * 5;
      }
      else //si sale cualquier otro número
      {
        this.saldo = this.saldo + (this.apuesta * 3);
        this.resultado = "Muy bien! Sumas $" + this.apuesta * 3;
      }
    }
    else
    {
      if(this.dado1 === this.dado2 || this.dado1 === this.dado3 || this.dado2 === this.dado3) //en dos dados sale la misma cantidad
      {
        this.saldo = this.saldo + (this.apuesta * 2);
        this.resultado = "Bien! Sumas $" + this.apuesta * 2;
      }
      else
      {
        this.saldo = this.saldo - this.apuesta;
        this.resultado = "Uh! Perdiste...";
        this.evaluaSaldo();
      }
    }
  }

  terminarJuego():void{
    if(this.saldo > 0)
    {
      let ganancia = this.montoInicial - this.saldo;
      this.resultado = "Felicidades! Ganaste $" + Math.abs(ganancia);
      this.flagPerdio = true;
    }
    else
    {
      this.resultado = "Lástima, no ganaste nada...";
    }
  }

  evaluaSaldo():void{
    if(this.saldo <= 0)
    {
      this.resultado = "Has perdido todas tus apuestas.";
      this.flagPerdio = true;
    }
  }

  resetear():void{
    this.juegoComenzado = false;
    this.montoInicial = 0;
    this.flagMontoInicial = false;
    this.apuesta = null;
    this.saldo = 0;
    this.resultado = '';
    this.dado1 = 0;
    this.flagPerdio = false;
  }

  ngOnInit(): void {
  }

}
