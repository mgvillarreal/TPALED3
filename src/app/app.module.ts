import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './componentes/error/error.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { TopmenuComponent } from './componentes/topmenu/topmenu.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';
import { PptComponent } from './componentes/juegos/ppt/ppt.component';
import { AdivinaNumeroComponent } from './componentes/juegos/adivina-numero/adivina-numero.component';
import { ListadoResultadosComponent } from './componentes/juegos/listado-resultados/listado-resultados.component';
import { MenuJuegosComponent } from './componentes/menu-juegos/menu-juegos.component';
import { HttpClientModule } from '@angular/common/http';
import { MayorMenorComponent } from './componentes/juegos/mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './componentes/juegos/ahorcado/ahorcado.component';
import { DadosComponent } from './componentes/juegos/dados/dados.component';
import { ListadoUsuariosComponent } from './componentes/login/listado-usuarios/listado-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BienvenidaComponent,
    ErrorComponent,
    QuienSoyComponent,
    TopmenuComponent,
    JuegosComponent,
    TatetiComponent,
    PptComponent,
    AdivinaNumeroComponent,
    ListadoResultadosComponent,
    MenuJuegosComponent,
    MayorMenorComponent,
    AhorcadoComponent,
    DadosComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
