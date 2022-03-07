import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Wishlist } from 'src/app/interfaces/wishlists';
import { ProductModule } from 'src/app/modules/product/product.module';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  product:Product

  constructor(private http:HttpClient,private productService:ProductService) { }


  getUserWishList(userId:number){
    return this.http.get<Wishlist[]>(`http://localhost:8081/wishes/usuario/${userId}`);
  }


  deleteWishListItem(userId:number,productId:number){
    return this.http.delete(`http://localhost:8081/wishes/${userId}/${productId}`);

  }

  postWishListItem(userId:number,productId:number){
    const wishListItem = {
      idUser : userId,
      idProduct : productId
    }
     return this.http.post(`http://localhost:8081/wishes/`,wishListItem);
  }

}
