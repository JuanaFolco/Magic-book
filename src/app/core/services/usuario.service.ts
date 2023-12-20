import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/tab2/tab2.page';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  usuario:Usuario = {
    nombre: "",
    apellido: ""
  }
}
