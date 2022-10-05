import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {

  @Input() productName : string = "";
  @Input() productPrice : number = 0;
  @Input() productImage : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
