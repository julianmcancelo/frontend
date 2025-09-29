import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialPedidosComponent } from './components/historial-pedidos.component';

@NgModule({
  declarations: [HistorialPedidosComponent],
  imports: [
    CommonModule
  ],
  exports: [HistorialPedidosComponent]
})
export class HistorialPedidosModule { }