import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = "public";
  newMonkey: any;
  allMonkey: any;
  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
    this.getMonkeysFromService();
    this.newMonkey = {name: "", age: 0, color: ""};
  }
  getMonkeysFromService(){
    this._httpService.getMonkey().subscribe(data => {
      console.log(data);
    })
  }
  getAllMonkey(){
    this._httpService.getMonkey().subscribe(data => {
      console.log(data);
    })
  }
}
