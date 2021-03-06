import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {cartURL} from '../config/api';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {

  constructor(private http:HttpClient) { }

  getCartItems():Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartURL).pipe(
      map((result:any[])=>{
        let cartItems:CartItem[]=[];
        for(let item of result){
          let productExists=false;

          for(let i in cartItems){
            if(cartItems[i].productId === item.product.id){
              cartItems[i].qty++;
              productExists=true;
              break;
            }
          }
          if(!productExists){
            cartItems.push(new CartItem(item.id,item.product));
          }

        }
        return cartItems;
      }));
  }

  addProducttoCart(product:Product){
    return this.http.post(cartURL,{product});
  }
}


