import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import { ContadorCantidadComponent } from "../../core/components/contador-cantidad/contador-cantidad.component";

@NgModule({
  declarations: [ProductoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
    ContadorCantidadComponent
  ]
})
export class ProductoPageModule {}
