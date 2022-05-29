export class Tateti {
    tablero:any = [];
    fichaHumano:string;
    fichaComputadora:string;
    turno:string;
    jugados:number;

    constructor(fichaH, turno) {
        this.tablero = [
            [{ocupada: false, ficha: "", posicion: [0,0]},{ocupada: false, ficha: "", posicion: [0,1]}, {ocupada: false, ficha: "", posicion: [0,2]}],
            [{ocupada: false, ficha: "", posicion: [1,0]},{ocupada: false, ficha: "", posicion: [1,1]}, {ocupada: false, ficha: "", posicion: [1,2]}],
            [{ocupada: false, ficha: "", posicion: [2,0]},{ocupada: false, ficha: "", posicion: [2,1]}, {ocupada: false, ficha: "", posicion: [2,2]}]];
            this.fichaHumano = fichaH;
        this.fichaComputadora = 'X';
        this.turno = turno, 
        this.jugados = 0;
    }

    setFichaJugadorvoid(ficha):void{
        this.fichaHumano = ficha;
        this.fichaComputadora = 'X';
    }

    reset(fichaH, turno){
      this.tablero = 	[
              [{ocupada: false, ficha: "", posicion: [0,0]},{ocupada: false, ficha: "", posicion: [0,1]}, {ocupada: false, ficha: "", posicion: [0,2]}],
              [{ocupada: false, ficha: "", posicion: [1,0]},{ocupada: false, ficha: "", posicion: [1,1]}, {ocupada: false, ficha: "", posicion: [1,2]}],
              [{ocupada: false, ficha: "", posicion: [2,0]},{ocupada: false, ficha: "", posicion: [2,1]}, {ocupada: false, ficha: "", posicion: [2,2]}]];
          this.fichaHumano = fichaH;
      this.fichaComputadora = 'X';
      this.turno = turno;
      this.jugados = 0;
    }

    agregarFicha(tipoFicha, fila, columna):void{
        this.tablero[fila][columna].ocupada = true;
        this.tablero[fila][columna].ficha = tipoFicha;
    }

    estaOcupada(fila, columna):any{
        return this.tablero[fila][columna].ocupada;
    }
      
    cambiarTurno():void{
        if (this.turno == 'c'){
          this.turno = 'h';
        }
        else
        {
          this.turno = 'c';
        }
    }

    diagonales():any{
      let res = [];
      res.push([]);
      res.push([]);
      res[0].push(this.tablero[0][0]);
      res[0].push(this.tablero[1][1]);
      res[0].push(this.tablero[2][2]);
      res[1].push(this.tablero[0][2]);
      res[1].push(this.tablero[1][1]);
      res[1].push(this.tablero[2][0]);
      return res;
    }
	
    columna(n):any{
      let res = [];
      for (var f of this.tablero){
        res.push(f[n]);
      }
      return res;
    }
	
    columnas():any{
      let res = [];
      res.push(this.columna(0));
      res.push(this.columna(1));
      res.push(this.columna(2));	  
      return res;
    }

    estaTerminado():any{
        return this.estaLleno() || this.hay3EnLinea();
    }

    estaLleno():any{
		return this.jugados >= 9;
	  }

    hay3EnLinea():boolean{
		let lineas = this.columnas().concat(this.tablero).concat(this.diagonales());
		for (var linea of lineas){
			if(this.hay3Iguales(linea)){
				return true;
			}
		}
		return false;
	  }

    celdasVaciasDeLineasConDosOcupadas(ficha):any{ 
    	let lineas = this.columnas().concat(this.tablero).concat(this.diagonales());
    	let res = [];
    	for (let linea of lineas){
    		let tiene = this.tieneUnaSolaDesocupada(linea, ficha); 
    		if (tiene.length !== 0){
    			res.push(tiene);
    		}
    	}
    	return res;
    }

    tieneUnaSolaDesocupada(linea, tipoFicha):any{
    	let count = 0;
    	let posicion = [];
    	for (let celda of linea){
    		if (celda.ocupada){
    			if (celda.ficha === tipoFicha){
    				count++;
    			}
    		}
        else{
    			posicion = celda.posicion; 
    		}
    	}
    	if (count === 2){
    		return posicion;
    	} else {
    		return [];
    	}
    }

    hay3Iguales(linea):any{
		var count = 0;
		var ficha = "";
		for (var celda of linea){
			if (celda.ocupada){
				if (ficha !== ""){
					if(ficha === celda.ficha){
						count++;
					} else {
						return false;
					}
				} else {
					ficha = celda.ficha;
					count++;
				}
			} else {
				return false;
			}
		}
		return count === 3;
	  }

    desocupada():any{ 
        let posicion = []; 
        for (var i = 0; i < this.tablero.length; i++){
          let f = this.tablero[i];	    
          for (let j = 0; j < f.length; j++)
          {
            if(!this.estaOcupada(i,j)){
                posicion = [i, j];
                return posicion; 
            }
          }
        }
    }
}
