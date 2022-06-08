import { Hijos } from "./hijos.models";

export class Usuario{
    constructor(
        public id:string,
        public nombre: string,
        public password:string,
        public hijos?:['']
        
    ){
      

    }
}