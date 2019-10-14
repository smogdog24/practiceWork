import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-portland',
  templateUrl: './portland.component.html',
  styleUrls: ['./portland.component.css']
})
export class PortlandComponent implements OnInit {
  public = 'app';
  currentWeather: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this._httpService.Portland().subscribe(data => {
      console.log(data, "retrieving Portland data")
      this.currentWeather = data;
    })
  }
}
