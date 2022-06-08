import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    RegisterComponent

 

  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AuthModule { }
