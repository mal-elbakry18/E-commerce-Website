import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products : Array<products> = [
    {name : "shoes" , price : 90.00, imageURL : "/assets/pics/shoes1.webp"},
    {name : "Glasses" , price : 225.00, imageURL : "/assets/pics/glasses1.webp"},
    {name : "Hoodie" , price : 100.00, imageURL : "/assets/pics/hoodie1.webp"},
    {name : "Watch" , price : 150.00, imageURL : "/assets/pics/watch.webp"},
    {name : "Plant" , price : 85.00, imageURL : "/assets/pics/plant1.webp"},
    {name : "Frame" , price : 75.00, imageURL : "/assets/pics/frame1.webp"},
    {name : "Perfume" , price : 285.00, imageURL : "/assets/pics/perfume1.webp"},
    {name : "Scarf" , price : 165.00, imageURL : "/assets/pics/scarf1.webp"},
    {name : "Lamp" , price : 235.00, imageURL : "/assets/pics/lamp1.webp"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
