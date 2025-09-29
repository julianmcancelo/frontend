import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialPedidosService {

  private apiUrl = 'http://localhost:3000/api/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}