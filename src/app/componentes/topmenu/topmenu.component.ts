import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  estaLogueado:boolean=false;
  arrayUsuario = [];

  constructor(private router: Router) {
    if(localStorage.getItem('usuarioLog') !== null)
    {
      this.estaLogueado = true;
      this.arrayUsuario = JSON.parse(localStorage.getItem('usuarioLog'));
      console.log('prueba: ', this.arrayUsuario);
    }
  }

  desloguear():void{
    this.estaLogueado = false;
    this.arrayUsuario.pop();
    localStorage.setItem("usuarioLog", JSON.stringify(this.arrayUsuario));
    this.router.navigate(['bienvenida']);
  }

  ngOnInit(): void {
  }

}
