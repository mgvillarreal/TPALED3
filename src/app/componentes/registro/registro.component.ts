import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public forma: FormGroup; 
  
  miUsuario = new Usuario;
  resultado?:boolean = true;
  msjValidacion?:string;
  usuarioEncontrado:number = 0;

  constructor(private router: Router, private fb: FormBuilder) { }

  validarContrasenas(): void {
    if(!this.miUsuario.validaUsuarioRegistrado())
    {
      if(this.miUsuario.pwd == this.forma.value['pwdConfirm'])
      {
        this.miUsuario.registrar();
        this.miUsuario.guardaLogin();
        this.router.navigate(['juegos']);
        this.usuarioEncontrado = 1;
      }
      else
      {
        this.resultado = false;
        this.msjValidacion = 'Las contraseñas no coinciden. Intenta nuevamente'
      }
    }
    else
    {
      if(this.usuarioEncontrado=0)
      {
        this.resultado = false;
        this.msjValidacion = 'El usuario ya existe. Intenta iniciando sesión.';
      }
    }
    
  }

  ngOnInit(): void {
    this.forma = this.fb.group({ //se toma del constructor que tiene inyectado el servicio que esta importado
      'nombre': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'contrasena': ['', Validators.required],
      'pwdConfirm': ['', Validators.required],
    });
  }

}
