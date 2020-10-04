import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartItemComponent } from '../../cart/cart-item/cart-item.component';
import { CartService } from 'src/app/services/cart.service';
import { CartitemService } from 'src/app/services/cartitem.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItems:Product;

  @Input() addItemWishList:boolean;

  constructor(private cartService:CartService,private cartItem:CartitemService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }

  addingItem(){
    this.cartItem.addProducttoCart(this.productItems).subscribe(()=>{
      this.cartService.addItemsToCart(this.productItems);
    });
  }

  addItemToWishlist(){
    this.wishlistService.addProductToWishlist(this.productItems.id).subscribe(()=>{
      this.addItemWishList=true;
    });
  }

  removeItemFromWishlist(){
    this.wishlistService.removeProductFromWishlist(this.productItems.id).subscribe(()=>{
      this.addItemWishList=false;
    });
  }

}
