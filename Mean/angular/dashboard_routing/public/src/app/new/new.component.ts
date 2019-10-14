import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router) { }
  newRabbit: any;

  ngOnInit() {
    this.newRabbit = {name: "", age: 0, color: ""}
  }
  onSubmit(){
    this._httpService.createRabbit(this.newRabbit).subscribe(data => {
      console.log(data);
      this.newRabbit = {name: "", color: "", age: 0};
      this._router.navigate(['/rabbits'])
    })
  }

}
