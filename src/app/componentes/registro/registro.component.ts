import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miUsuario = new Usuario;
  mail:String;
  pwd:String;
  pwdConfirm:String;
  resultado?:boolean = true;
  msjValidacion?:string;

  constructor(private router: Router) { }

  validarContrasenas(): void {
    if(this.miUsuario.nombre !== undefined && this.miUsuario.mail !== undefined && this.miUsuario.pwd !== undefined && this.pwdConfirm !== undefined)
    {
      if(this.miUsuario.validaUsuarioRegistrado())
      {
        if(this.miUsuario.pwd == this.pwdConfirm)
        {
          this.miUsuario.registrar();
          this.router.navigate(['login']);
        }
        else
        {
          this.resultado = false;
          this.msjValidacion = 'Las contraseñas no coinciden. Intenta nuevamente'
        }
      }
      else
      {
        this.resultado = false;
        this.msjValidacion = 'El usuario ya existe. Intenta iniciando sesión.';
      }
    }
    else
    {
      this.resultado = false;
      this.msjValidacion = 'Todos los campos son requeridos. Intenta nuevamente';
    }
   
  }

  ngOnInit(): void {
  }

}
