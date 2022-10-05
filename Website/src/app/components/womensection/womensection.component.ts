import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-womensection',
  templateUrl: './womensection.component.html',
  styleUrls: ['./womensection.component.css']
})
export class WomensectionComponent implements OnInit {

  womensectionProducts : Array<products> = [
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
