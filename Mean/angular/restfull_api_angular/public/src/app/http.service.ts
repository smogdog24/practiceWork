import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
    this.getAllTask();
    // this.createTask({throwable: false, name: "sword", durability: 10, damage: 15, description: "sharp and pointy"});
    // this.getTask("5d800e3e4c443820a8e6927b");
    // this.updateTask("5d800e3e4c443820a8e6927b",{throwable: false, name: "sword", durability: 5, damage: 20, description: "sharp and pointy"});
    // this.deleteTask("5d800e3e4c443820a8e6927b")
   }
    

  getAllTask(){
    console.log("..in the service");
    console.log("-> going to express routes");
    return this._http.get('/weapons');
  }
  // createTask(wep){
  //   let tempObservable = this._http.post('/', wep);
  //   tempObservable.subscribe(data => console.log("new weapon added", data));
  // }
  // getTask(id){
  //   let tempObservable = this._http.get(`/weapons/${id}`);
  //   tempObservable.subscribe(data => console.log("this is one weapon", data));
  // }
  // updateTask(id, wep){
  //   let tempObservable = this._http.put(`/update/${id}`, wep);
  //   tempObservable.subscribe(data => console.log("this weapon was updated", data));
  // }
  // deleteTask(id){
  //   let tempObservable = this._http.delete(`/delete/${id}`);
  //   tempObservable.subscribe(data => console.log("this weapon is now deleted", data));
  // }
}