import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login', //permite reutilizar el componente
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miUsuario:Usuario; //aca se define la clase
  nombreOb:string;
  resultado:boolean = true;
  msjValidacion?:string;
  
  constructor(private router: Router) { 
    this.miUsuario = new Usuario(); //esto se instancia cuando el constructor se dispara
  }

  ingresar(): void {
    let listadoUsuarios:any;
    let mailEncontrado = 0;
    console.info('mail: ', this.miUsuario.mail);

    if(localStorage.getItem('usuarios') !== null) 
    {
      listadoUsuarios = JSON.parse(localStorage.getItem('usuarios')); 
    }

    if(this.miUsuario.mail != undefined && this.miUsuario.pwd != undefined)
    {
      for (let usuario of listadoUsuarios)
      {
        if(usuario.mail === this.miUsuario.mail)
        {
          if(usuario.pwd === this.miUsuario.pwd)
          {
            this.router.navigate(['juegos']);
            this.nombreOb = usuario.nombre;
            this.guardaLogin();
            mailEncontrado = 1;
          }
          else
          {
            this.resultado = false;
            this.msjValidacion = "Contraseña incorrecta. Intenta nuevamente.";
          }
        }
        else
        {
          this.resultado = false;
          this.msjValidacion = "Usuario no existe. Intenta registrarte.";
        }
        
        // if(mailEncontrado!=1)
        // {
        //   this.resultado = false;
        //   this.msjValidacion = "Usuario no existe.";
        // }
      }
    }
    else
    {
      this.resultado = false;
      this.msjValidacion = "Todos los campos son requeridos.";
    }

  }

  guardaLogin():void {
    var usuarioLog = [];
    usuarioLog.push({nombre: this.nombreOb, mail: this.miUsuario.mail})
    localStorage.setItem("usuarioLog", JSON.stringify(usuarioLog));
    this.miUsuario.validaLogeo();
  }


  /*ingresarAdmin(): void {
    console.info('Objeto ', this.miUsuario);
    
    if(this.miUsuario.mail == 'ADMIN' && this.miUsuario.pwd == '1234')
    {
      this.router.navigate(['bienvenida']);
    }
    else
    {
      this.router.navigate(['registro']);
    }
  }*/

  ngOnInit(): void {
  }

}
