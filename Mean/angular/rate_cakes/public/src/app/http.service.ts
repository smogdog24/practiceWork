import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
    getCakes(){
    return this._http.get('/_cakes');
  }
  getCake(id){
    return this._http.get(`/cakes/${id}`);
  }
  createCake(cake){
    return this._http.post('/cakes', cake);
  }
  updateCake(id,cake){
    return this._http.put(`/cakes/${id}`, cake);
  }
  // deleteCake(id){
  //   return this._http.delete(`/cakes/${id}`);
  // }
}
