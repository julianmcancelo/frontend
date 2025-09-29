import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../carrito/services/carrito.service';
import { CheckoutService } from '../services/checkout.service';
import { CarritoItem } from '../models/carrito-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items: CarritoItem[] = [];

  constructor(
    private carritoService: CarritoService,
    private checkoutService: CheckoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carritoService.items$.subscribe(items => {
      this.items = items;
    });
  }

  realizarPedido(): void {
    this.checkoutService.crearPedido(this.items).subscribe(() => {
      this.carritoService.vaciarCarrito();
      this.router.navigate(['/productos']);
    });
  }
}