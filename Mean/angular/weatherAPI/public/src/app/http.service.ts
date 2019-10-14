import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  Chicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=4887398&units=imperial&appid=cce58541c27473f2750a40591e4540a8')
  }
  sanDiego(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=5391811&units=imperial&appid=cce58541c27473f2750a40591e4540a8')
  }
  Asheville(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=4453066&units=imperial&appid=cce58541c27473f2750a40591e4540a8')
  }
  Portland(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=cce58541c27473f2750a40591e4540a8')
  }
  newOrleans(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=4335045&units=imperial&appid=cce58541c27473f2750a40591e4540a8')
  }
  sanFrancisco(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=5391959&units=imperial&appid=cce58541c27473f2750a40591e4540a8')
  }
}
