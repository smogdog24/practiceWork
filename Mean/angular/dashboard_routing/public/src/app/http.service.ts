import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getRabbits(){
    return this._http.get('/rabbits');
  }
  getRabbit(id){
    return this._http.get(`/rabbits/${id}`);
  }
  createRabbit(rabbit){
    return this._http.post('/rabbits', rabbit);
  }
  updateRabbit(id,rabbit){
    return this._http.put(`/rabbits/${id}`, rabbit);
  }
  deleteRabbit(id){
    return this._http.delete(`/rabbits/${id}`);
  }
}
