import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/modules/core/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:Product[] 

  constructor(private productService:ProductService) { 
    
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getProducts()
    .subscribe(products=>{
      this.products=products;
    });
  }


  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
