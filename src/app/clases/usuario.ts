export class Usuario {
    mail:string; //defino la variable y el tipo
    pwd:string;
    nombre:string;
    resultadoLog:boolean=false;
    resultadoReg:boolean=true;

    constructor(){   
    }

    registrar(): void {
        let usuarios = [];

        if(localStorage.getItem('usuarios') !== null) //valido que el array usuarios exista
        {
            usuarios = JSON.parse(localStorage.getItem('usuarios')); //obtengo el array que existe
        }
        else
        {
            usuarios = []; //creo el array
        }
        usuarios.push({nombre: this.nombre, mail: this.mail, pwd: this.pwd}); //agrego el objeto al array
        localStorage.setItem("usuarios", JSON.stringify(usuarios)); //guardo el array actualizado
    }

    validaLogeo(): void{
        if(typeof localStorage.getItem('usuarioLog') !== null)
        {
          this.resultadoLog = true;
          let arrayLog = JSON.parse(localStorage.getItem('usuarios'));
          this.nombre = arrayLog[0];
        }
    }

    validaUsuarioRegistrado(): boolean{
        let listadoUsuarios = JSON.parse(localStorage.getItem('usuarios'));
        let resultado:boolean;

        if(listadoUsuarios !== null)
        {
            for (let usuarios of listadoUsuarios)
            {
                if(usuarios.nombre == this.nombre)
                {
                    resultado = false;
                }
                else
                {
                    resultado = true;
                }
            }
        }
        else
        {
            resultado = true;
        }

        return resultado;
    }
}
