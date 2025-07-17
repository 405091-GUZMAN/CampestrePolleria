import {Component} from '@angular/core';
import {ItemCarrito, Producto} from '../../models/models';
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
  cantidadesSeleccionadas: { [id: number]: number } = {};
  carrito: ItemCarrito[] = [];

  get categorias(): string[] {
    const todas = this.productos.map(p => p.categoria || '');
    return ['Todos', ...Array.from(new Set(todas))];
  }

  get productosFiltrados(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') return this.productos;
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  agregarAlCarrito(producto: Producto): void {
    const cantidad = this.cantidadesSeleccionadas[producto.id!];
    if (!cantidad || cantidad <= 0) return;

    const existente = this.carrito.find(item => item.producto?.id === producto.id);
    if (existente) {
      existente.cantidad! += cantidad;
    } else {
      this.carrito.push({ producto, cantidad });
    }
    this.cantidadesSeleccionadas[producto.id!] = 0;
  }

  get totalCarrito(): number {
    return this.carrito.reduce((total, item) => {
      return total + (item.producto?.precio || 0) * (item.cantidad || 0);
    }, 0);
  }

  enviarPedidoWhatsapp() {
    if (this.carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    const listaItems = this.carrito.map(item => {
      const nombre = item.producto?.nombre || '';
      const cantidad = item.cantidad?.toFixed(2) ?? '0';
      const precio = item.producto?.precio?.toFixed(2) ?? '0';
     if (item.producto?.nombre === 'Pollo entero'){
       return `- ${nombre}: ${cantidad} unidad`;
     }
      return `- ${nombre}: ${cantidad} kg`;
    }).join('\n');

    const total = this.totalCarrito.toFixed(2);

    const mensaje = `¡Hola! Quiero realizar un pedido:\n${listaItems}\n\n`;

    const urlWhatsapp = `https://wa.me/5493517053156?text=${encodeURIComponent(mensaje)}`;

    window.open(urlWhatsapp, '_blank');
  }

  eliminarDelCarrito(productoId: number): void {
    this.carrito = this.carrito.filter(item => item.producto?.id !== productoId);
  }


}
