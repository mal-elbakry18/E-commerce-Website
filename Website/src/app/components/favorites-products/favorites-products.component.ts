import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-products',
  templateUrl: './favorites-products.component.html',
  styleUrls: ['./favorites-products.component.css']
})
export class FavoritesProductsComponent implements OnInit {

  @Input() productName : string = "";
  @Input() productPrice : number = 0;
  @Input() productImage : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
