import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios.models';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUsuario:Usuario []=[];
  public formRegister!:FormGroup;

  constructor(private fb:FormBuilder, private route: Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {

    this.formRegister = this.fb.group({
      id:['', Validators.required],
      nombre:['', Validators.required],
      password:['', Validators.required],
      hijos:[[], Validators.required]
    })

    this.registerUsuario= JSON.parse(localStorage.getItem('usuario')|| '');

  }

  

  registrarUsuario(){

    // const user = new Usuario(this.formRegister.value)

    this.registerUsuario.push(this.formRegister.value);

    localStorage.setItem('usuario', JSON.stringify(this.registerUsuario));


    this.registerUsuario= JSON.parse(localStorage.getItem('usuario')|| '');

 this.usuarioService.usuarios.next(this.registerUsuario);
// console.log(result);
console.log(this.registerUsuario);

    this.route.navigateByUrl('pages');



  }



}
