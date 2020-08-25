import { Injectable } from '@angular/core';
import {wishlistUrl} from 'src/config/api'
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getwishlist(){
   return this.http.get(wishlistUrl).pipe(
     map((result:any[])=>{

      let productId=[];
      result.forEach(item => productId.push(item.id))


      return productId;
     })
   )
   
  }


  addToWishlist(productId){
  return this.http.post(wishlistUrl,{id:productId});
  }


  removeFromWishlist(productId){
  return this.http.delete(wishlistUrl+"/"+productId)
  }






}
