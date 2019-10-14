import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private _http: HttpClient) { }
    getProducts(){
    return this._http.get('/_products');
  }
  getProduct(id){
    return this._http.get(`/products/${id}`);
  }
  createProduct(product){
    return this._http.post('/products', product);
  }
  updateProduct(id,product){
    return this._http.put(`/products/${id}`, product);
  }
  deleteProduct(id){
    return this._http.delete(`/products/${id}`);
  }
}

