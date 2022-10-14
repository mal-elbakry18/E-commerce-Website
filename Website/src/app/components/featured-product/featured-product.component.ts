import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {

  @Input() productName : string = "";
  @Input() productPrice : Number = 0;
  @Input() productImage : string = "";
  @Input() Item : any;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
