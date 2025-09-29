import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarritoItem } from '../models/carrito-item.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private apiUrl = 'http://localhost:3000/api/pedidos';

  constructor(private http: HttpClient) { }

  crearPedido(items: CarritoItem[]): Observable<any> {
    return this.http.post(this.apiUrl, { items });
  }
}