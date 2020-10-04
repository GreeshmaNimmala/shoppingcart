import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { wishlistURL, cartURL } from '../config/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishlist(){
    return this.http.get(wishlistURL).pipe(
      map((result:any[])=>{
        let productIds=[];
        result.forEach(item=>productIds.push(item.id))
          return productIds;
        })
    );
  }

  addProductToWishlist(productid){
    return this.http.post(wishlistURL,{id:productid});
  }

  removeProductFromWishlist(productid){
    return this.http.delete(wishlistURL+ '/' +productid);
  }
}
