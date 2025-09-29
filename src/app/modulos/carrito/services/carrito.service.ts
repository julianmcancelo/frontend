import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items = new BehaviorSubject<any[]>([]);
  items$ = this.items.asObservable();

  constructor() { }

  agregarAlCarrito(producto: any) {
    const currentItems = this.items.getValue();
    const existingItem = currentItems.find(item => item.id === producto.id);
    if (existingItem) {
      existingItem.cantidad++;
    } else {
      currentItems.push({ ...producto, cantidad: 1 });
    }
    this.items.next(currentItems);
  }

  eliminarDelCarrito(productoId: any) {
    const currentItems = this.items.getValue().filter(item => item.id !== productoId);
    this.items.next(currentItems);
  }

  vaciarCarrito() {
    this.items.next([]);
  }
}