import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-san-diego',
  templateUrl: './san-diego.component.html',
  styleUrls: ['./san-diego.component.css']
})
export class SanDiegoComponent implements OnInit {
  public = 'app';
  currentWeather: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.sanDiego().subscribe(data => {
      console.log(data, "retrieving San Diego data")
      this.currentWeather = data;
    })
  }
}
