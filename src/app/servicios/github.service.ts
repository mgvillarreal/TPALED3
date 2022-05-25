import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  urlAPI:string = 'https://api.github.com/users/mgvillarreal';

  constructor(private miGithub: HttpClient){

  }

  retornarPerfil(){
   return this.miGithub.get(this.urlAPI);
  }
}
