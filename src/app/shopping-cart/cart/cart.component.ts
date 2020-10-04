import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/model/product';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartitemService } from 'src/app/services/cartitem.service';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
    // {
    //   id:1,
    //   productId:1,
    //   productName:'Sanitizer',
    //   qty:4,
    //   price:10
    // },
    // {
    //   id:2,
    //   productId:2,
    //   productName:'Gloves',
    //   qty:5,
    //   price:20
    // },
    // {
    //   id:3,
    //   productId:3,
    //   productName:'Vitamin C',
    //   qty:1,
    //   price:10
    // }
  ];

  cartTotal=0;

  productExists=false;


  constructor(private cartService:CartService,
    private cartItem:CartitemService) { }

  ngOnInit(){

    this.handleSubscroption();
    this.loadCartItems();
  }

  handleSubscroption(){
    this.cartService.getItemToCart().subscribe((product:Product)=>{
      this.loadCartItems();
      // this.addProductDetailsToCart(product);
    });
  }

loadCartItems(){
  this.cartItem.getCartItems().subscribe((items:CartItem[])=>{
    this.cartItems=items;
    this.calculateCartTotal();
  });
}


calculateCartTotal(){
  this.cartTotal=0;
  this.cartItems.forEach(item=>{
    this.cartTotal+=(item.qty*item.price);
  });
}

}
