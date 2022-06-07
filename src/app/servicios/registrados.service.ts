import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistradosService {

  listadoUsuarios:any[];

  constructor() { }

  llenaArray():void{
    if(JSON.parse(localStorage.getItem('usuarios')) !== null)
    {
      this.listadoUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    }    
  }
  
}
