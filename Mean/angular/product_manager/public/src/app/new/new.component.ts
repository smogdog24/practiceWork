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
  newProduct: any;
  errors: any;

  ngOnInit() {
    this.newProduct = {name: "", price: 0, imageURL: ""}
  }
  onSubmit(){
    this._httpService.createProduct(this.newProduct).subscribe(data => {
      console.log(data);
      if('errors' in data){
        this.errors = data['errors'];
      } else {
      this.newProduct = {name: "", imageURL: "", price: 0};
      this._router.navigate(['/products'])
      }
    })
  }
}