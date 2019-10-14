import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  rabbits: any;
  selectedRabbit: any;

  ngOnInit() {
    this.getRabbitsFromService();
  }
  getRabbitsFromService(){
    this._httpService.getRabbits().subscribe(data => {
      console.log(data) //debug checking
      this.rabbits = data;
    })
  }
  rabbitToShow(rabbit){
    this.selectedRabbit = rabbit;
  }
}
