import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  @Input() rabbitToShow: any;
  constructor() { }

  ngOnInit() {
  }

}
