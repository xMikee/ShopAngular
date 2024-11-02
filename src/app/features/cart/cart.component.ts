import {Component, inject} from '@angular/core';
import {CartService} from '../../core/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  template: `
    @if(cartService.cartIsEmpty()){
      <div class="text-red-600"> Nesun prodotto nel carrello</div>
    } @else {
     <div class="text-cart">
       Nel carrello ci sono {{cartService.totalCart()}} prodotti
     </div>

      <table class="table table-zebra">
        <thead>
        <th></th>
        <th>Immagine</th>
        <th>Nome</th>
        <th>Costo</th>
        <tr></tr>
        </thead>
        <tbody>
          @for(items of cartService.items(); track items.id){
            <tr>
              <th>{{$index + 1}}</th>
              <th><img class="size-20" [src]="items.image"/></th>
              <th>{{items.name}}</th>
              <th>{{items.cost}} €</th>
              <th><button (click)="cartService.removeFromCart(items)">X</button></th>
            </tr>
          }
        </tbody>
      </table>
      <div class="total text-xl my-6 flex justify-end">Totale: € {{cartService.totalCartCost()}}</div>
    }




  `,
  styles: ``
})
export default class CartComponent {

  cartService = inject(CartService);
}
