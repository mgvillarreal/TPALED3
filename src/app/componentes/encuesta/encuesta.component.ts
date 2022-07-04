import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaI } from 'src/app/interfaces/encuestaI';
import { EncuestaService } from 'src/app/servicios/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public forma: FormGroup;
  public encuesta: EncuestaI;

  constructor(private fb: FormBuilder, private servEncuesta: EncuestaService) { }

  guardaEncuesta(){
    this.servEncuesta.guardaEncuesta(this.forma.value);
  }

  ngOnInit(): void {
    this.forma = this.fb.group({ //se toma del constructor que tiene inyectado el servicio que esta importado
      'nombre': ['', [Validators.required]],
      'apellido': ['', [Validators.required]],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'telf': ['', [Validators.required, Validators.pattern('[0-9]{10}$')]], 
      'horario': ['', Validators.required],
      'juegofav': ['', Validators.required],
      'recomend': ['', Validators.required],
    });
  }

}
