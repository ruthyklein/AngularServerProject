import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public baseUrl ='https://localhost:7022/api/Product';
  // private productsList: Product[] = [
  //   { id: 1, name: "milk", price: 5, outOfStock: true },
  //   { id: 2, name: "cheese", price: 11, outOfStock: false },
  //   { id: 3, name: "shoko", price: 7, outOfStock: false }]

  constructor(private http: HttpClient) { }

  // getProductsList() {
  //   return this.productsList
  // }

  getProductFromServer(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
  }
  addProduct(product: Product): Observable<Product[]> {
    // this.productsList.push(product)
    console.log(product);
    return this.http.post<Product[]>(this.baseUrl, product)
  }
}
