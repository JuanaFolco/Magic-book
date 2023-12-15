import { Component, OnInit } from '@angular/core';
import { CATEGORIAS } from '../core/constants/categoria';
import { Categoria } from '../core/interface/categorias';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  categorias:Categoria[] = CATEGORIAS;

   
}
