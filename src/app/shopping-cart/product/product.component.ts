import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList:Product[]=[];
  wishlist:number[]=[];

  constructor(private productService:ProductService,private wishListService:WishlistService) { }

  ngOnInit(){
    this.loadProducts();
    this.loadwishlist();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.productList=products;
    });

  }

  loadwishlist(){
    this.wishListService.getWishlist().subscribe(productid=>{
      // console.log(productid);
      this.wishlist=productid;
    });
  }

}
