import { UnaryOperator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  letras: string[] = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x','y','z']
  tecladoActivado:number=1;
  resultado:string;
  imagen:number = 1;
  palabraSecreta:string;
  palabraVisible:string = "";
  letra:string;
  listaPalabras:string[] = ['guitarra', 'suciedad', 'abrelatas', 'periferia', 'pantalla', 'manantial', 'cerradura', 'claridad', 'mausoleo', 'creatividad', 'humareda', 'parabrisas', 'estigma', 'esclavitud', 'sobrenatural']
  letrasJugadas:any = [];

  constructor() {
    this.eligePalabra();
  }

  eligePalabra():void{
    let opcion = Math.floor(Math.random() * (0 - 12) * -1);
    this.palabraSecreta = this.listaPalabras[opcion];
    this.crearPalabraVisible();
  }

  crearPalabraVisible():void{
    for (let i = 0; i < this.palabraSecreta.length; i++) {
      this.palabraVisible = this.palabraVisible.concat("_");
    }
  };

  tomaLetra(letra: string){
    this.letra = letra;
    console.log("Letra seleccionada: ", this.letra);

    // this.letrasJugadas.push(letra);
    // console.log("letrass: ", this.letrasJugadas);
    // for(let i = 0; i<this.letrasJugadas.length; i++)
    // {
    //   if(this.letrasJugadas[i] === letra)
    //   {
    //     this.resultado = "Ya jugaste la letra " + letra;
    //   }
    // }

    this.jugar();
  }

  jugar():void{
    if(this.palabraSecreta.indexOf(this.letra) != -1)
    {
      this.actualizaPalabraVisible(this.letra);
    }
    else
    {
      this.imagen++;
    }
    this.validaJugada();
  }

  actualizaPalabraVisible(letra: string):void{
    let aux = [...this.palabraVisible];

    for(let i = 0; i<this.palabraSecreta.length; i++)
    {
      if(this.palabraSecreta[i] === letra)
      {
        aux[i] = letra; 
        console.log(aux);
        this.palabraVisible = aux.join("");
      }
    }
  }

  validaJugada():void{

    if(this.imagen === 7)
    {
      this.tecladoActivado = 0;
      this.resultado = "Perdiste :(";
    }
    else
    {
      if(this.palabraVisible === this.palabraSecreta)
      {
        this.tecladoActivado = 0;
        this.resultado = "Ganaste!!";
      }
    }
  }

  resetear(){
    this.tecladoActivado = 1;
    this.resultado = "";
    this.imagen = 1;
    this.letra = "";
    this.palabraVisible = "";
    this.eligePalabra();
  }

  ngOnInit(): void {
  }

}
