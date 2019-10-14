import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-orleans',
  templateUrl: './new-orleans.component.html',
  styleUrls: ['./new-orleans.component.css']
})
export class NewOrleansComponent implements OnInit {
  public = 'app';
  currentWeather: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.newOrleans().subscribe(data => {
      console.log(data, "retrieving New Orleans data")
      this.currentWeather = data;
    })
  }
}
