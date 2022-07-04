import { Component, OnInit } from '@angular/core';
import { RegistradosService } from 'src/app/servicios/registrados.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  @Output() datosLogin = new EventEmitter<string>();

  constructor(public registrados: RegistradosService) { }

  agregarUnLogin(jugador: string) {
    this.datosLogin.emit(jugador);
  }

  ngOnInit(): void {
    this.registrados.llenaArray();
  }

}
