import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthJuegosService } from '../servicios/auth-juegos.service';

@Injectable({
  providedIn: 'root'
})
export class JuegosGuard implements CanActivate {

  constructor(private router:Router, private authJuego: AuthJuegosService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;

    if(this.authJuego.tieneAcceso == true)
    {
      console.info("llego a dar acceso");
      return true;
    }
    else
    {
      this.router.navigate(['error']);
      console.info("llego a denegar acceso");
      return false;
    }

  }
  
}
