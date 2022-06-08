import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hijos } from 'src/app/models/hijos.models';
import { Usuario } from 'src/app/models/usuarios.models';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public RegistrarHijos:any []=[];
  public FormCrear!: FormGroup;
  public EmitRegisterUsuario:any[]=[];
public filterPost='';


  

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.FormCrear= this.fb.group({
      id:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      // hijo:[Hijos],
    });

    this.usuarioService.usuarios
    .subscribe((resp:any)=>{
      console.log('respuesta',resp);
      this.EmitRegisterUsuario= resp;
   
      // localStorage.setItem('usuario', JSON.stringify(this.EmitRegisterUsuario))

      this.EmitRegisterUsuario= JSON.parse(localStorage.getItem('usuario')|| '')

    });


  }


  mostrarUsuario(){

    this.usuarioService.usuarios.subscribe(resp=> console.log(resp));
   this.EmitRegisterUsuario = JSON.parse(localStorage.getItem('usuario') || '');
    console.log( this.EmitRegisterUsuario );

  
  }


  crearHijos(){
    this.RegistrarHijos.push(this.FormCrear.value);
    console.log(this.RegistrarHijos);
    localStorage.setItem('hijo', JSON.stringify(this.RegistrarHijos));
    
    this.usuarioService.hijos.next(this.RegistrarHijos);
    this.FormCrear.reset();
    const close= document.getElementById('close');
    close?.click();
    

  }
  mostrarHijo(){

    // const {nombre, apellido} = hio

    // const hijo = new Hijos(nombre, apellido);

    // this.FormCrear.setValue({nombre, apellido})

  }


  verHijo(){

   
    

    
  }

}
