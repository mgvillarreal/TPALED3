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
import { AhorcadoComponent } from './componentes/juegos/ahorcado/ahorcado.component';
import { DadosComponent } from './componentes/juegos/dados/dados.component';
import { ListadoUsuariosComponent } from './componentes/login/listado-usuarios/listado-usuarios.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { ComprarJuegoComponent } from './componentes/comprar-juego/comprar-juego.component';
import { ListadoCompradosComponent } from './componentes/comprar-juego/listado-comprados/listado-comprados.component';
import { JuegosGuard } from './guardianes/juegos.guard';
import { RequiereComprarComponent } from './componentes/requiere-comprar/requiere-comprar.component';
import { JuegosCompradosComponent } from './componentes/juegos-comprados/juegos-comprados.component';


const routes: Routes = [ //ac?? es importante el orden del array
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent,
    children: [
      { path: 'listado-usuarios', component: ListadoUsuariosComponent }
    ]
  },
  { path: 'registro', component: RegistroComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'topmenu', component: TopmenuComponent },
  { path: 'juegos', component: JuegosComponent,
    children: [
      { path: 'tateti', component: TatetiComponent, canActivate: [JuegosGuard] },
      { path: 'ppt', component: PptComponent, canActivate: [JuegosGuard] },
      { path: 'adivina-numero', component: AdivinaNumeroComponent, canActivate: [JuegosGuard] },
      { path: 'mayor-menor', component: MayorMenorComponent, canActivate: [JuegosGuard] },
      { path: 'ahorcado', component: AhorcadoComponent, canActivate: [JuegosGuard] },
      { path: 'dados', component: DadosComponent, canActivate: [JuegosGuard] },
      { path: 'listado-resultados', component: ListadoResultadosComponent }
    ] 
  },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'comprar-juego', component: ComprarJuegoComponent,
    children: [
      { path: 'listado-comprados', component: ListadoCompradosComponent }
    ]
  },
  { path: 'juegos-comprados', component: JuegosCompradosComponent },
  { path: 'requiere-comprar', component: RequiereComprarComponent },
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
