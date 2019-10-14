import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  products: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProductsFromService()
    }
    getProductsFromService(){
      this._httpService.getProducts().subscribe(data => {
        console.log(data) //to check in console
        this.products = data;
    })
    // onDelete(id){
    //   this._httpService.deleteProduct(id).subscribe(data => {
    //     this.ngOnInit();
    //   })
    // }
  }

}
