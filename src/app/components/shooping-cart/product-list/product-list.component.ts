import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  wishlist:Number[]=[];


  constructor(private productService:ProductService,
    private wishlistServer:WishlistService
    ) { }

  ngOnInit(): void {
    this.getProduct();
    this.loadWishlist();

  }

  getProduct(){
    this.productService.getProducts().subscribe(
      data=>{
        this.products=data,
        console.log(this.products)
      },
      error=>console.warn(error),
    )
  }

  loadWishlist(){
    this.wishlistServer.getwishlist().subscribe(data=>{
      this.wishlist=data,
      console.log(this.wishlist)
    },);
  }




}
 