import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListaComponent } from './components/producto-lista.component';
import { ProductoNuevoComponent } from './components/producto-nuevo.component';
import { ProductoEditarComponent } from './components/producto-editar.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component'; // Importar
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductoListaComponent, 
    ProductoNuevoComponent, 
    ProductoEditarComponent, 
    ProductoDetalleComponent // Declarar
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ProductoListaComponent, 
    ProductoNuevoComponent, 
    ProductoEditarComponent, 
    ProductoDetalleComponent // Exportar
  ]
})
export class ProductosModule { }