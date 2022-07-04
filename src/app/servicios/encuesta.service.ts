import { Injectable } from '@angular/core';

import { Firestore, collection, addDoc, collectionData, query, where, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { EncuestaI } from '../interfaces/encuestaI';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private firestore: Firestore) { }

  guardaEncuesta(encuesta: any){
    const encRef = collection(this.firestore, 'encuestas');

    return addDoc(encRef, encuesta);
  }

}
