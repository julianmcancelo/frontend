import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ProductosModule } from './modulos/productos/productos.module';
import { CarritoModule } from './modulos/carrito/carrito.module';
import { CheckoutModule } from './modulos/checkout/checkout.module';
import { HistorialPedidosModule } from './modulos/historial-pedidos/historial-pedidos.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacionModule } from './modulos/autenticacion/autenticacion.module';
// import { ProductosModule } from './modulos/productos/productos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
        CommonModule,
        RouterOutlet,
        HttpClientModule,
        AutenticacionModule,
        ProductosModule,
        CarritoModule,
        CheckoutModule,
        HistorialPedidosModule,
        LayoutModule
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}
