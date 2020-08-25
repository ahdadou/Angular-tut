import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cartUrl } from 'src/config/api';
import { CartItem } from '../models/cart';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }


  getCartItem():Observable<CartItem[]>{

    return this.http.get<CartItem[]>(cartUrl).pipe(

      map((result: any[])=>{

        let cartItems: CartItem[] = [];

        for (let item of result) {
          console.log(item)
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product.price, item.product.name, item.product.id));
            console.log(item.product)
          }
        }

        return cartItems;


      })
    )
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }

}
