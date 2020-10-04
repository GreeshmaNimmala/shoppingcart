import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addItem=new Subject();

  constructor() { }

  addItemsToCart(item){
    // console.log(item);
    this.addItem.next(item);
  }

  getItemToCart(){
    return this.addItem.asObservable();
  }


}
