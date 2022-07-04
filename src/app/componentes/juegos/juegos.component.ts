import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AuthJuegosService } from 'src/app/servicios/auth-juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  rutaJuego:string;
  
  constructor(private authJuego: AuthJuegosService) { }

  recibeRutaJuego(juego: string):void{
    this.rutaJuego = juego;
    this.authJuego.obtieneRutaJuego(this.rutaJuego);
  }

  ngOnInit(): void {
  }
}
