export interface Producto {
  id?: number;
  nombre?: string;
  categoria?: string;
  precio?: number;
  descripcion?: string;
  imagenUrl?: string;
  promo?: string
}

export interface ItemCarrito {
  producto?: Producto;
  cantidad?: number;
}
