import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/servicios/github.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  datosPerfil?:any;

  constructor(private miGithub: GithubService) { 
    this.miGithub.retornarPerfil().subscribe(
                                              perfil => {
                                                         this.datosPerfil = perfil;
                                                         console.info('Perfil:', this.datosPerfil);
                                                        } 
                                            );
  }

  ngOnInit(): void {
  }

}
