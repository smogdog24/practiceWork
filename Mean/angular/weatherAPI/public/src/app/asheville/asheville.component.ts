import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-asheville',
  templateUrl: './asheville.component.html',
  styleUrls: ['./asheville.component.css']
})
export class AshevilleComponent implements OnInit {
  public = 'app';
  currentWeather: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.Asheville().subscribe(data => {
      console.log(data, "retrieving Asheville data")
      this.currentWeather = data;
    })
  }
}
