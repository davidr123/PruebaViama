import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HijosComponent } from './pages/hijos/hijos.component';
import { PagesComponent } from './pages/pages.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [


  {path:'pages', component: PagesComponent, children:[
   {path:'usuario', component: UsuarioComponent},
   {path:'hijos', component: HijosComponent},

  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
