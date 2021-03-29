import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from "./model/product";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }
jsonUrl : string = '../assets/product.json';
getAllProducts(){
  return this.http.get<any>('../assets/product.json')
  .toPromise().then(res => <Product[]>res.data)
  .then(data => {return data;});
  // return this.http.get<Product[]>('../assets/product.json');
  
}

}

