import { UnaryOperator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  imagen:number = 1;
  palabraSecreta:string;
  palabraVisible:string = "";
  letra:string;


  constructor() {
    this.palabraSecreta = 'separar';
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
  }

  actualizaPalabraVisible(letra: string):void{
    let aux =[...this.palabraVisible];

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

  ngOnInit(): void {
  }

}
