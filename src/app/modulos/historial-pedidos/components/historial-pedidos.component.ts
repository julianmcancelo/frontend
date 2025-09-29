import { Component, OnInit } from '@angular/core';
import { HistorialPedidosService } from '../services/historial-pedidos.service';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.scss']
})
export class HistorialPedidosComponent implements OnInit {

  pedidos: any[] = [];

  constructor(private historialPedidosService: HistorialPedidosService) { }

  ngOnInit(): void {
    this.historialPedidosService.getPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }

}