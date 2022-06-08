import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.css']
})
export class HijosComponent implements OnInit {


  public ArrayHijos:any[]=[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.hijos
    .subscribe((resp:any)=> {
      this.ArrayHijos= resp;

      this.ArrayHijos= JSON.parse(localStorage.getItem('hijo') ||'');
    });

  }

}
