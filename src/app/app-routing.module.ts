import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { TopmenuComponent } from './componentes/topmenu/topmenu.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';
import { PptComponent } from './componentes/juegos/ppt/ppt.component';
import { AdivinaNumeroComponent } from './componentes/juegos/adivina-numero/adivina-numero.component';
import { ListadoResultadosComponent } from './componentes/juegos/listado-resultados/listado-resultados.component';
import { MayorMenorComponent } from './componentes/juegos/mayor-menor/mayor-menor.component';


const routes: Routes = [ //acá es importante el orden del array
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'topmenu', component: TopmenuComponent },

  //{ path: 'juegos', component: JuegosComponent },
  //{ path: 'juegos/tateti', component: TatetiComponent },
  //{ path: 'juegos/ppt', component: PptComponent },

  { path: 'juegos', component: JuegosComponent,
    children: [
      { path: 'tateti', component: TatetiComponent },
      { path: 'ppt', component: PptComponent },
      { path: 'adivina-numero', component: AdivinaNumeroComponent },
      { path: 'mayor-menor', component: MayorMenorComponent },
      { path: 'listado-resultados', component: ListadoResultadosComponent }
    ] 
  },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  /*declarations: [],
  imports: [
    CommonModule
  ]*/

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
