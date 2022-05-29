export class Usuario {
    mail:string; //defino la variable y el tipo
    pwd:string;
    nombre:string;
    estaLogueado:boolean=false;
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

    guardaLogin():void {
        let fechaIng = new Date();
        let usuarioLog = [];
        usuarioLog.push({nombre: this.nombre, mail: this.mail, fechaIng: fechaIng.toLocaleDateString()})
        localStorage.setItem("usuarioLog", JSON.stringify(usuarioLog));
        this.estaLogueado = true;
    }

    validaUsuarioRegistrado(): boolean{
        let resultado:boolean;

        if(JSON.parse(localStorage.getItem('usuarios')) !== null)
        {
            let listadoUsuarios = JSON.parse(localStorage.getItem('usuarios'));
            for (let usuarios of listadoUsuarios)
            {
                if(usuarios.nombre == this.nombre)
                {
                    resultado = true;
                }
                else
                {
                    resultado = false;
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
