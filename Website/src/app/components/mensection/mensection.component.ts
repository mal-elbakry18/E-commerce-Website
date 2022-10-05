import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-mensection',
  templateUrl: './mensection.component.html',
  styleUrls: ['./mensection.component.css']
})
export class MensectionComponent implements OnInit {

  mensectionProducts : Array<products> = [
    {name : "shoes" , price : 90.00, imageURL : "/assets/pics/shoes1.webp"},
    {name : "Glasses" , price : 225.00, imageURL : "/assets/pics/glasses1.webp"},
    {name : "Hoodie" , price : 100.00, imageURL : "/assets/pics/hoodie1.webp"},
    {name : "Watch" , price : 150.00, imageURL : "/assets/pics/watch.webp"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
