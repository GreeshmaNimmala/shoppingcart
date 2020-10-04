import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {productURL} from '../config/api';
import { Product } from '../model/product';

// const apiURL='http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // products:Product[]=[
  //   new Product(1,'Sanitizer','This is Sanitizer',5,'https://images.foxtv.com/static.fox2detroit.com/www.fox2detroit.com/content/uploads/2020/03/1280/720/Sanitizer.jpg?ve=1&tl=1'),
  //   new Product(2,'Gloves','This are gloves',10,'https://cdn.shopify.com/s/files/1/0074/1225/2741/products/2020-03-11_113831_1296x1296.png?v=1583961025'),
  //   new Product(3,'Vitamin C','This are immune boosters',9,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMApKv5MUJsJKLhzrvfW7zdKxEJgdchsHzjw&usqp=CAU')
  // ];

  constructor(private http:HttpClient) { }


getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(productURL);
}
}
