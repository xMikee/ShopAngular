import {computed, Injectable, signal} from '@angular/core';
import {Product} from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = signal<Product[]>([]);

  cartIsEmpty = computed(() => !this.items().length)
  totalCart = computed(() => this.items().length)

  totalCartCost = computed(
    () => this.items().reduce((acc,item) => acc + item.cost,0)
  )

  addToCart(itemstoAdd: Product) {
    const isNotToCart = this.items().find(item => item.id === itemstoAdd.id);
    if(!isNotToCart) {
      this.items.update(
        items => [...items, itemstoAdd]
      )
    }
  }

  removeFromCart(itemsToRemove: Product) {
    this.items.update(
       items => items.filter(
         item => item.id !== itemsToRemove.id
       )
    )
  }

  clearCart() {
    this.items.set([])
  }

}
