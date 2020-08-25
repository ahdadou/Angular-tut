import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'
import {CartService} from 'src/app/services/cart-item.service'
import {WishlistService} from 'src/app/services/wishlist.service'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:Product;
  @Input() addToWishlist:boolean=false;

  constructor(private messengerService:MessengerService,
    private cartService:CartService,
    private wishlistServer:WishlistService
    ) { }

  ngOnInit(): void { 
  }


  handleAddTocart(){
  this.cartService.addProductToCart(this.productItem).subscribe(()=>{
    this.messengerService.sendMsg(this.productItem);
  })
  }


  handleAddToWishList(){
   this.wishlistServer.addToWishlist(this.productItem.id).subscribe(()=>{
   this.addToWishlist=true;
   })
  }

  handleRemoveFromWishlist(){
    this.wishlistServer.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addToWishlist=false;
      })
  }


}
