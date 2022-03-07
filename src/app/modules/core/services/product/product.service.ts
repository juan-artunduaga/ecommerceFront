import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http:HttpClient) {
    
   }

   getProducts(){
    return this.http.get<Product[]>('http://localhost:8081/products');
   }


  //  getProduct(){
  //    return this.http.get<Product>('');
  //  }
}
