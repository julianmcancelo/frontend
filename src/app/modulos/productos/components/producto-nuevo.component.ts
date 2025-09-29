import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.scss']
})
export class ProductoNuevoComponent {
  producto: any = {};

  constructor(private productoService: ProductoService, private router: Router) { }

  guardarProducto() {
    this.productoService.createProducto(this.producto).subscribe(() => {
      this.router.navigate(['/productos']);
    });
  }
}