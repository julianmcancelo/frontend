import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.scss']
})
export class ProductoEditarComponent implements OnInit {
  producto: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProducto(id).subscribe(data => {
        this.producto = data;
      });
    }
  }

  guardarProducto(): void {
    this.productoService.updateProducto(this.producto.id, this.producto).subscribe(() => {
      this.router.navigate(['/productos']);
    });
  }
}