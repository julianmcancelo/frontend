import { Producto } from "../../productos/models/producto.model";

export interface CarritoItem {
    producto: Producto;
    cantidad: number;
  }