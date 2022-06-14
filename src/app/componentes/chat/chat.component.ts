import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  nuevoMensaje:string = "";
  listaMensajes:any = [
    {
      emisor:"jose@mail.com",
      descripcion:"hola",
    }, {
      emisor:"juan@mail.com",
      descripcion:"hola, como estas?",
    },  {
      emisor:"jose@mail.com",
      descripcion:"bien y tu?",
    },  {
      emisor:"juan@mail.com",
      descripcion:"bien",
    }, 
  ];
  mailLogeado:string;
  mostrarChat=false;

  constructor() { }

  enviarMensaje():void{

    if(this.nuevoMensaje == "" ) return;
    
    console.log(this.nuevoMensaje);
    let mensaje = {
      emisor: this.mailLogeado,
      descripcion: this.nuevoMensaje,
    }
    this.listaMensajes.push(mensaje);

    this.nuevoMensaje = "";

    setTimeout(() => {
      this.scrollHastaUltElementoPorClase();
    }, 10);
    
  }

  scrollHastaUltElementoPorClase():void{
    let elementos = document.getElementsByClassName('msj');
    let ultElemento:any = elementos[elementos.length - 1];
    let topPos = ultElemento.offsetTop;

    //@ts-ignore
    document.getElementById("contenedorMensajes")?.scrollTop = topPos;
  }

  obtenerLogeado():void{
    if(localStorage.getItem('usuarioLog') !== null)
    {
      let arrayUsuario = JSON.parse(localStorage.getItem('usuarioLog'));
      for(let usuario of arrayUsuario ){
        this.mailLogeado = usuario.mail
      }
      //console.log("mail logueado", this.mailLogeado);
    }
  }

  ngOnInit(): void {
    this.obtenerLogeado();
  }

}


