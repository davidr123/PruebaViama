import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuarios.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarios: BehaviorSubject<any[]>= new BehaviorSubject<any>([]);
  public hijos: BehaviorSubject<any[]>= new BehaviorSubject<any>([]);

// public hijos: EventEmitter<any[]>= new EventEmitter<Cliente>();





  constructor() { }


  storePassedObject(passedData:any) {
    this.usuarios.next(passedData);
   
}
// here instead of retrieve like this you can directly subscribe the property in your components
retrievePassedObject() {
    return this.usuarios;
    
}

storePassedObjectHijo(passedDatahijo:any) {
  this.hijos.next(passedDatahijo);
 
}
// here instead of retrieve like this you can directly subscribe the property in your components
retrievePassedObjectHijo() {
  return this.hijos;
  
}
}
