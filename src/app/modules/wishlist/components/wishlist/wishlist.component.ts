import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Wishlist } from 'src/app/interfaces/wishlists';
import { WishlistService } from 'src/app/modules/core/services/wishlist/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist:Wishlist[]
  displayedColumns: string[] = ['Imagen','Producto', 'Precio','Stock','Acciones'];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.fechWichListUser(1)
    
  }
  
  deleteProduct(userId:number,productId:number){
    this.wishlistService.deleteWishListItem(userId,productId)
    .subscribe(rta=>this.fechWichListUser(1));
  }

  fechWichListUser(userId:number){
    this.wishlistService.getUserWishList(userId)
    .subscribe((result)=>{
      this.wishlist = result;
    });
  }

}
