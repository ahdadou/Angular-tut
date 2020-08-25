import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {productsUrl} from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

 products:Product[]=[
   new Product(1,'product 1','this is the product 1 description',100),
   new Product(2,'product 2','this is the product 2 description',200),
   new Product(3,'product 3','this is the product 3 description',300),
   new Product(4,'product 4','this is the product 4 description',400),
   new Product(5,'product 5','this is the product 5 description',500),
   new Product(6,'product 6','this is the product 6 description',600),
   new Product(7,'product 7','this is the product 7 description',700),

 ]


  constructor(private http:HttpClient) { }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl);
  }


}
