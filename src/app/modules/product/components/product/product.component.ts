import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/modules/core/services/product/product.service';
import { WishlistService } from 'src/app/modules/core/services/wishlist/wishlist.service';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {



  @Input() product: Product;
  @Output() productClicked:EventEmitter<any> = new EventEmitter();

  constructor(private wishListService:WishlistService) { }

  ngOnInit(): void {
  }

  addToWishList(userId:number){
   return this.wishListService.postWishListItem(userId,this.product.id)
   .subscribe(()=>{Swal.fire({
      title: 'Producto agregado',
      text: 'Puedes encontrarlo en tu wishlist',
      icon: 'success',
      confirmButtonText: 'Aceptar'
  })},error=>(
    Swal.fire({
      title: 'Oops!',
      text: 'Este producto ya se encuentra en tu lista',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    })));
  }

}
