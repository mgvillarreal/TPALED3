import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primer Proyecto';
  miUsuario:Usuario = new Usuario;

  calcular(){
    this.title = this.title; //el title sería un atributo de la clase, por eso necesita el this
  }
}
