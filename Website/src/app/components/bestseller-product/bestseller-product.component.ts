import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestseller-product',
  templateUrl: './bestseller-product.component.html',
  styleUrls: ['./bestseller-product.component.css']
})
export class BestsellerProductComponent implements OnInit {

  @Input() Name : string = "";
  @Input() Price : number = 0;
  @Input() Image : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
