import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../../carrito/services/carrito.service'; // Importar CarritoService

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {

  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private carritoService: CarritoService // Inyectar CarritoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProducto(id).subscribe(producto => {
        this.producto = producto;
      });
    }
  }

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarAlCarrito(producto);
  }

}