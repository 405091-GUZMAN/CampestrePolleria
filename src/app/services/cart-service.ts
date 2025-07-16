import { Injectable } from '@angular/core';
import {CartItem, Product} from '../models/models';

@Injectable({ providedIn: 'root' })
export class CartService {

  private items: CartItem[] = [];

  addToCart(product: Product, quantity: number) {
    const index = this.items.findIndex(i => i.product.id === product.id);
    if (index > -1) {
      this.items[index].quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];
  }
}
