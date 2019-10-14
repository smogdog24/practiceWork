import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';

  constructor(private _httpService: HttpService) { }
  cakes: any;
  newCake: any;
  update: any;

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = {name: "", imageURL: ""}
    this.getCakesFromService()
    this.update = {rating: 1, comment: ""}
  }
  getCakesFromService(){
    this._httpService.getCakes().subscribe(data => {
      console.log(data);
      this.cakes = data;
    })
  }
  onSubmit(){
    this._httpService.createCake(this.newCake).subscribe(data => {
      console.log(data);
      this.newCake = {name: "", imageURL: ""}
    })
  }
  onUpdate(id){
    this._httpService.updateCake(id, this.update).subscribe(data => {
      console.log(data);
    })
  }
}
