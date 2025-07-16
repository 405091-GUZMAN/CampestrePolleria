import {Component} from '@angular/core';
import {Producto} from '../../models/models';
import {DecimalPipe} from '@angular/common';
import {productos} from '../../models/productos';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-product-catalog',
  imports: [
    DecimalPipe,
    FormsModule
  ],
  templateUrl:'./product-catalog.html',
  styleUrl: './product-catalog.css'
})
export class ProductCatalog {
  productos: Producto[] = productos;
  categoriaSeleccionada: string = 'Todos';
  cantidadesSeleccionadas: { [productoId: number]: number } = {};

  get categorias(): string[] {
    const todas = this.productos.map(p => p.categoria).filter((c): c is string => !!c);
    return ['Todos', ...Array.from(new Set(todas))];
  }


  get productosFiltrados(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') return this.productos;
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  agregarAlCarrito(producto: Producto) {

  }
}
