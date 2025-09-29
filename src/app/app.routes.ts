import { Routes } from '@angular/router';
// import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './modulos/autenticacion/components/login/login.component';
import { RegistroComponent } from './modulos/autenticacion/components/registro/registro.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductoListaComponent } from './modulos/productos/components/producto-lista.component';
import { ProductoNuevoComponent } from './modulos/productos/components/producto-nuevo.component';
import { ProductoEditarComponent } from './modulos/productos/components/producto-editar.component';
import { ProductoDetalleComponent } from './modulos/productos/components/producto-detalle/producto-detalle.component';
import { CarritoComponent } from './modulos/carrito/components/carrito.component';
import { CheckoutComponent } from './modulos/checkout/components/checkout.component';
import { HistorialPedidosComponent } from './modulos/historial-pedidos/components/historial-pedidos.component';
import { HomeComponent } from './layout/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'productos', component: ProductoListaComponent, canActivate: [AuthGuard] },
    { path: 'productos/nuevo', component: ProductoNuevoComponent, canActivate: [AuthGuard] },
    { path: 'productos/editar/:id', component: ProductoEditarComponent, canActivate: [AuthGuard] },
    { path: 'productos/:id', component: ProductoDetalleComponent, canActivate: [AuthGuard] }, // Nueva ruta
    { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },
    { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
    { path: 'historial-pedidos', component: HistorialPedidosComponent, canActivate: [AuthGuard] }
];
