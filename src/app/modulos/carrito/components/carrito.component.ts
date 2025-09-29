import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  items: any[] = [];
  displayedColumns: string[] = ['nombre', 'cantidad', 'precio', 'acciones'];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.items$.subscribe(items => {
      this.items = items;
    });
  }

  eliminarDelCarrito(productoId: any) {
    this.carritoService.eliminarDelCarrito(productoId);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }
}