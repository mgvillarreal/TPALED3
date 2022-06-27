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
  palabraVisibleAct:string;
  letra:string;
  posicionLetra:number;


  constructor() {
    this.palabraSecreta = 'prueba';
    this.crearPalabraVisible();
  }

  crearPalabraVisible():void{
    for (let i = 0; i < this.palabraSecreta.length; i++) {
      this.palabraVisible = this.palabraVisible.concat("_ ");
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
      this.actualizaPalabraVisible();
      // console.log("prueba: ", this.palabraSecreta.charAt(this.palabraSecreta.indexOf(this.letra)));
    }
    else
    {
      this.imagen++;
    }
  }

  actualizaPalabraVisible():void{
    // this.palabraVisibleAct = this.palabraVisible.replace(this.palabraVisible[this.posicionLetra], this.letra);
    // console.log("Prueba reemplazo: ", this.palabraVisibleAct);
    // this.palabraVisible = this.palabraVisibleAct;
    let retoro:String = "";
    for (let i = 0; i < this.palabraSecreta.length; i++)
    {
      if(this.palabraSecreta.charAt(i) == this.letra)
      {
        console.log("posicion char at: ", this.palabraSecreta.charAt(i));
        retoro = retoro.concat(this.letra + " "); 
      }
      else
      {
        retoro = retoro.concat(this.palabraVisible.charAt(i) + " ");
      }
    }
    console.log("Palabra Actu: ", retoro);
  }

  ngOnInit(): void {
  }

}
