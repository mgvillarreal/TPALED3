import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login', //permite reutilizar el componente
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public forma: FormGroup; 

  miUsuario:Usuario; //aca se define la clase
  nombreOb:string;
  mailOb:string;
  msjValidacion:string = '';
  
  constructor(private router: Router, private fb: FormBuilder) { 
    this.miUsuario = new Usuario(); //esto se instancia cuando el constructor se dispara
  }

  ingresar(): void {
    this.miUsuario.mail = this.forma.value['email'];
    this.miUsuario.pwd = this.forma.value['contrasena'];

    let listadoUsuarios:any;
    let mailEncontrado = 0;

    if(localStorage.getItem('usuarios') !== null) 
    {
      listadoUsuarios = JSON.parse(localStorage.getItem('usuarios'));

      for (let usuario of listadoUsuarios)
      {
        if(usuario.mail === this.forma.value['email'])
        {
          if(usuario.pwd === this.forma.value['contrasena'])
          {
            this.router.navigate(['juegos']);
            this.nombreOb = usuario.nombre;
            this.mailOb = usuario.mail;
            this.guardaLoginIng();
            mailEncontrado = 1;
          }
          else
          {
            this.msjValidacion = "Contraseña incorrecta. Intenta nuevamente.";
          }
        }
        else
        {
          this.msjValidacion = "Usuario no existe. Intenta registrarte.";
        }
      }
    }
  }

  guardaLoginIng():void {
    let fechaIng = new Date();
    let usuarioLog = [];
    usuarioLog.push({nombre: this.nombreOb, mail: this.mailOb, fechaIng: fechaIng.toLocaleDateString()})
    localStorage.setItem("usuarioLog", JSON.stringify(usuarioLog));
    this.miUsuario.estaLogueado = true;
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
    this.forma = this.fb.group({ //se toma del constructor que tiene inyectado el servicio que esta importado
      'email': ['', [Validators.required, Validators.email]],
      'contrasena': ['', Validators.required]
    });
  }

}
