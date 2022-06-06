import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
    this.miUsuario.nombre = this.forma.value['nombre'];
    this.miUsuario.mail = this.forma.value['email'];
    this.miUsuario.pwd = this.forma.value['contrasena'];

    if(this.miUsuario.validaUsuarioRegistrado())
    {
      this.miUsuario.registrar();
      this.miUsuario.guardaLogin();
      this.router.navigate(['juegos']);
      this.usuarioEncontrado = 1;
    }
    else
    {
      this.msjValidacion = 'El usuario ya existe. Intenta iniciando sesión.';
    }
    
  }

  ngOnInit(): void {
    this.forma = this.fb.group({ //se toma del constructor que tiene inyectado el servicio que esta importado
      'nombre': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'contrasena': ['', Validators.required],
      'pwdConfirm': ['', Validators.required],
    }, { validators: this.contrasenasIgualesValidator });
  }

  contrasenasIgualesValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const pwd = control.get('contrasena');
    const pwdConfirm = control.get('pwdConfirm');
  
    return pwd && pwdConfirm && pwd.value !== pwdConfirm.value ? { contrasenasIguales: true } : null;
  };

}
