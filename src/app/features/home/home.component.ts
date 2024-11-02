import {Component, inject, signal} from '@angular/core';
import {Product} from '../../model/products';
import {JsonPipe} from '@angular/common';
import {CartService} from '../../core/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <div class="flex gap-10">
       @for(product of products(); track product.id){
         <div class="card card-compact bg-base-100 w-96 shadow-xl">
           <figure>
             <img class="size-40"
               [src]="product.image"
               [alt]="product.name" />
           </figure>
           <div class="card-body">
             <div class="flex justify-between">
               <h2 class="card-title">{{product.name}}</h2>
               <div class="card-title">€ {{product.cost}}</div>
             </div>
             <p>{{product.description}}</p>
             <div class="card-actions justify-end">
               <button
                 class="btn btn-primary"
                 (click) = cartService.addToCart(product)
               >
                 Aggiungi al carrello
               </button>
             </div>
           </div>
         </div>
       }
    </div>

    <pre>{{cartService.items() | json}}</pre>
  `,
  styles: ``
})
export default class HomeComponent {
  products = signal<Product[]>(initialState);

  cartService = inject(CartService);

}

const initialState: Product[] =[
  {
    id: 1,
    name: "T-Shirt",
    image: "assets/images/nike1.png",
    description: "lorem...",
    cost: 10
  },
  {
    id: 2,
    name: "Bullet",
    description: "lorem...",
    image: "assets/images/nike2.webp",
    cost: 5
  },
  {
    id: 3,
    name: "Pic",
    description: "lorem...",
    image: "assets/images/insta360.jpg",
    cost: 2
  }
]
