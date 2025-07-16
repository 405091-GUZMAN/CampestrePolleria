import { Component } from '@angular/core';
import {Producto} from '../../models/models';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-product-catalog',
  imports: [
    DecimalPipe
  ],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css'
})
export class ProductCatalog {

  productos: Producto[] = [
    { id: 1, nombre: "Pollo Entero", categoria: "Pollo Fresco", precio: 3500, imagenUrl: "/assets/pollo_entero.jpg" },
    { id: 2, nombre: "Jamón Cocido", categoria: "Fiambrería", precio: 1200, imagenUrl: "/assets/jamon_cocido.jpg" },
    { id: 3, nombre: "Milanesas de Pollo", categoria: "Empanizados", precio: 2700, imagenUrl: "/assets/milanesas.jpg" },
    { id: 4, nombre: "Hamburguesas de Carne", categoria: "Congelados", precio: 100, imagenUrl: "/assets/empanadas_carne.jpg" },
    { id: 5, nombre: "Pechuga Congelada", categoria: "Congelados", precio: 2200, imagenUrl: "/assets/pechuga_congelada.jpg" },
    // ... más productos
  ];

  categorias: string[] = ["Todos", "Pollo Fresco", "Fiambrería", "Empanizados", "Otros", "Congelados"];
  categoriaSeleccionada: string = "Todos";

  get productosFiltrados() {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(p => p.categoria === this.categoriaSeleccionada);
  }







}
