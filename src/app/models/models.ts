export interface Producto {
  id: number;
  nombre: string;
  categoria: string; // ej: "Pollo Fresco", "Fiambres", etc.
  precio: number;
  imagenUrl: string;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}
