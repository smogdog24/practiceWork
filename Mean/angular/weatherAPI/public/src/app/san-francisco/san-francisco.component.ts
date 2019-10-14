import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-san-francisco',
  templateUrl: './san-francisco.component.html',
  styleUrls: ['./san-francisco.component.css']
})
export class SanFranciscoComponent implements OnInit {
  public = 'app';
  currentWeather: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.sanFrancisco().subscribe(data => {
      console.log(data, "retrieving San Francisco data")
      this.currentWeather = data;
    })
  }
}
