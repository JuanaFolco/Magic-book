import { Component } from '@angular/core';
import { IonLabel } from '@ionic/angular';
import { UsuarioService } from '../core/services/usuario.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor((private usuarioService:UsuarioService) {}
   usuario:Usuario = {
    nombre: "",
    apellido: ""
  }
  guardarDatos(){
    this.usuarioService.usuario = this.usuario;  
  }
}
export interface Usuario {
  nombre: String;
  apellido: String;
}


