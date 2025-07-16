import { Injectable } from '@angular/core';
import { ItemCarrito, Producto} from '../models/models';

@Injectable({ providedIn: 'root' })
export class CartService {

  private items: ItemCarrito[] = [];

  addToCart(producto: Producto, cantidad: number) {
    const index = this.items.findIndex(i => i.producto!.id === producto.id);
    if (index > -1) {
      this.items[index].cantidad! += cantidad;
    } else {
      this.items.push({ producto, cantidad });
    }
  }

  getItems(): ItemCarrito[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.producto!.precio! * item.cantidad!, 0);
  }

  clearCart() {
    this.items = [];
  }
}
